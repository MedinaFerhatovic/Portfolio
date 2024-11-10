'use client';

import { skillsData } from "@/app/data/skills";
import { skillsImage } from "@/app/data/skill-image";
import Image from "next/image";

function Skills() {
  const programmingLanguages = skillsData.filter(skill => skill.category === 'Programming Language');
  const tools = skillsData.filter(skill => skill.category === 'Tool');

  return (
    <div id="skills" className="my-16 lg:my-20 relative bg-gradient-to-br from-[#1c2a41] via-[#1e3a60] to-[#1c2a41] py-20 px-8 lg:px-16 rounded-2xl shadow-2xl text-gray-200">
      {/* Title Section */}
      <div className="hidden lg:flex flex-col items-center absolute top-10 -left-10 ml-5">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-3 px-6 text-lg lg:text-xl rounded-md tracking-widest shadow-lg">
          SKILLS
        </span>
        <span className="h-48 w-[3px] bg-[#1a1443] mt-4"></span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Programming Languages Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white text-center">Programming Languages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-12">
            {programmingLanguages.map((skill, id) => {
              const imageSrc = skillsImage(skill.name);
              return (
                <div
                  className="bg-[#1a1d2f] p-4 rounded-lg border border-[#1f223c] shadow-md group transform hover:scale-105 hover:shadow-lg transition-all duration-300 min-w-[180px] flex flex-col items-center"
                  key={id}
                >
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-transparent shadow-md group-hover:scale-110 transition-all duration-200">
                    <Image
                      src={imageSrc}
                      alt={skill.name}
                      width={80}
                      height={80}
                      className="h-full w-auto rounded-full transition-all duration-200"
                    />
                  </div>
                  <p className="text-white text-lg text-center mt-4">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white text-center">Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-12">
            {tools.map((skill, id) => {
              const imageSrc = skillsImage(skill.name);
              return (
                <div
                  className="bg-[#1a1d2f] p-4 rounded-lg border border-[#1f223c] shadow-md group transform hover:scale-105 hover:shadow-lg transition-all duration-300 min-w-[180px] flex flex-col items-center"
                  key={id}
                >
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-transparent shadow-md group-hover:scale-110 transition-all duration-200">
                    <Image
                      src={imageSrc}
                      alt={skill.name}
                      width={80}
                      height={80}
                      className="h-full w-auto rounded-full transition-all duration-200"
                    />
                  </div>
                  <p className="text-white text-lg text-center mt-4">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
