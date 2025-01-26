"use client"

import React from "react";

interface BranchChapter {
  name: string;
  logo: string;
  link: string;
}

const branchChapters: BranchChapter[] = [
  { name: "Society 1", logo: "/icons/image1.png", link: "/society1" },
  { name: "Society 2", logo: "/icons/image.png", link: "/society2" },
  { name: "Society 3", logo: "/icons/image1.png", link: "/society3" },
  { name: "Society 4", logo: "/icons/image.png", link: "/society4" },
  { name: "Society 5", logo: "/icons/image1.png", link: "/society5" },
];

const BranchChapters: React.FC = () => {
  return (
    <section className="text-center py-8">
      <h2 className="text-2xl font-sans font-bold mb-4">Branch Chapters</h2>
      <div className="bg-blue-100 py-8 px-6 rounded-md md:bg-white">
      <p className=" text-base mb-6 font-sans font-medium">
        We have a range of sub societies based on latest advancements in tech:
      </p>


      <div className="hidden md:flex justify-center flex-wrap gap-6">
        {branchChapters.map((chapter, index) => (
          <a
            key={index}
            href={chapter.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-40 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={chapter.logo}
              alt={`${chapter.name} logo`}
              className="w-full h-full object-cover p-2"
            />
          </a>
        ))}
      </div>
      {/* For small screens: Infinite scrolling slider */}
      <div className="md:hidden relative overflow-x-hidden w-full ">
        <div className="flex items-center gap-x-3 animate-slide">
          {branchChapters.concat(branchChapters).map((chapter, index) => (
            <a
              key={index}
              href={chapter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="  w-[40%] p-1 bg-white rounded-[50%] flex items-center justify-center overflow-hidden shadow-md"
            >
              <img
                src={chapter.logo}
                alt={`${chapter.name} logo`}
                className="w-[90%] h-[90%] object-cover "

              />
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          display: flex;
          width: calc(100% * 2); /* Duplicate content for smooth infinite scroll */
          animation: slide 10s linear infinite;
        }
      `}</style>
      </div>
    </section>
  );
};

export default BranchChapters;
