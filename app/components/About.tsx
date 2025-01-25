import React from 'react';

const About: React.FC = () => {
  return (
    <section className="my-3 pt-32" id="about">
      {/* Text Section */}
      <h2 className="text-2xl text-center font-bold mb-2">About us</h2>
      <div className='grid grid-cols-1 md:grid-cols-12 md:min-h-6 items-center justify-center gap-4 p-4'>
      <div className="bg-blue-100 col-span-1 md:col-span-6 p-6 rounded-lg shadow-md md:min-h-max">
        
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          The IEEE Systems Council, known as the Institute of Electrical and Electronics Engineers, represents the
          pinnacle of technical professionalism and innovation globally. With a membership that encompasses
          engineers, scientists, and allied professionals from diverse domains, including computer science, software
          development, information technology, physics, and medicine, the Systems Council epitomizes the pursuit of
          technological excellence. It is regarded as an institution that empowers every student to confront
          intricate challenges and drive innovation.
        </p>
      </div>

      {/* Video Section */}
      <div className="col-span-1 md:col-span-6  ">
      <div className="relative w-full pb-[50%] rounded-lg shadow-md overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/ERHPw_OaVI4?si=4mOr9qJ7_RnWYh0j"
    className="absolute top-0 left-0 w-full h-full "
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
      </div>
      </div>
    </section>
  );
};

export default About;