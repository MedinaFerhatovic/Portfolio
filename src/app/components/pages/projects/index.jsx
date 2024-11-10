"use client";  // Dodajte ovu liniju na početak

import { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '@/app/data/projects';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="projects" className="relative border-t my-12 lg:my-24 border-[#25213b] pt-15">
      {/* Title Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative pt-12">
        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-4 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            &#8592;
          </button>

          {/* Slide Container */}
          <div className="project-card w-[600px] bg-[#eeeeee] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative w-full h-[250px]">
              <Image
                src={projectsData[currentIndex].image}
                alt={projectsData[currentIndex].name}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full transition-all duration-500 ease-in-out"
              />
            </div>

            <div className="p-6 space-y-4">
              {/* Project Name */}
              <h3 className="text-2xl font-bold text-[#1a1443]">{projectsData[currentIndex].name}</h3>
              
              {/* Project Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Description</h4>
                <p className="text-sm text-gray-600 text-justify">{projectsData[currentIndex].description}</p>
              </div>

              {/* Tools Used */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Technologies</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {projectsData[currentIndex].tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>

              {/* Role */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Role</h4>
                <p className="text-sm text-gray-600">{projectsData[currentIndex].role}</p>
              </div>

              {/* Link to View Project */}
              <a
                href={projectsData[currentIndex].link || '#'}
                className="inline-block mt-4 bg-teal-500 text-[#1a1443] py-2 px-6 rounded-full hover:bg-[#13c28f] transition-all duration-300 text-center"
              >
                View Project
              </a>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
