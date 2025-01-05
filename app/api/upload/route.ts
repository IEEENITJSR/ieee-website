import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import connectDB from "../../../lib/mongo";
import Events from "../../../models/Events"
// Initialize the S3 client
const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  },
});

// Function to upload a single file to S3
async function uploadFileToS3(file: Buffer, fileName: string): Promise<string> {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `events/${Date.now()}-${fileName}`, // Store files in a folder with a timestamp to avoid name collisions
    Body: file,
    ContentType: "image/jpeg", // Adjust content type based on the file type if necessary
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return `${process.env.AWS_S3_URL}/${params.Key}`; // Return the full URL to the uploaded file
}

// API handler to handle file upload requests
export async function POST(request: Request) {
  try {
    await connectDB();
    const formData = await request.formData();
    
    // Get the fields from the form
    const title = formData.get("title");
    const author = formData.get("author");
    const body = formData.get("body");
    const briefSummary = formData.get("briefSummary");
    const location = formData.get("location");
    
    // Ensure required fields are provided
    if (!title || !author || !body || !briefSummary || !location) {
      return NextResponse.json({ error: "Please provide all required fields." }, { status: 400 });
    }

    const files = formData.getAll("images"); // 'images' should match the name in the frontend formData.append("images", file);

    if (files.length === 0) {
      return NextResponse.json({ error: "At least one image is required." }, { status: 400 });
    }

    // Upload each file to S3
    const uploadedFileUrls: string[] = [];
    for (const file of files) {
      if (file instanceof File) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const fileUrl = await uploadFileToS3(buffer, file.name);
        uploadedFileUrls.push(fileUrl); // Store the URL of each uploaded file
      }
    }
    for(let i = 0; i < uploadedFileUrls.length; i++) {  
      console.log("uploadedFileUrls", uploadedFileUrls[i]);
      uploadedFileUrls[i] = uploadedFileUrls[i].replace("undefined", `${process.env.PREURL}`);
    }
    let data =   {
        title,
        author,
        body,
        briefSummary,
        location,
        imageUrls: uploadedFileUrls,
      };  
    const event = await Events.create(data);
    console.log("uploadedFileUrls", uploadedFileUrls);
    console.log("data", data);
    // Return the event data along with the image URLs in the response
    return NextResponse.json({
      success: true,event
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong during the upload process." }, { status: 500 });
  }
}
