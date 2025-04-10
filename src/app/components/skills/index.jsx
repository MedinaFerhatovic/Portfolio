'use client';

import { skillsData } from "@/app/data/skills";
import { skillsIcon } from "@/app/data/skill-image"; // Novu funkciju importujete ovde
import { FaCode, FaToolbox } from 'react-icons/fa'; // Ikone za kategorije



function Skills() {
  const programmingLanguages = skillsData.filter(skill => skill.category === 'Programming Language');
  const tools = skillsData.filter(skill => skill.category === 'Tool');

  return (
    <div id="skills" className="my-16 lg:my-20 relative bg-gradient-to-br from-[#3c546c] via-[#295077] to-[#223f5c] py-20 px-8 lg:px-16 rounded-3xl shadow-xl text-gray-200">
      
      {/* Title Section */}
      <div className="hidden lg:flex flex-col items-center absolute top-10 -left-10 ml-5">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-3 px-6 text-lg lg:text-xl rounded-md tracking-widest shadow-lg">
          SKILLS
        </span>
        <span className="h-48 w-[3px] bg-[#1a1443] mt-4"></span>
      </div>

      {/* Content */}
      <div className="space-y-16">
        
        {/* Programming Languages Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white text-center flex items-center justify-center space-x-2">
            <FaCode className="text-2xl" />
            <span>Programming Languages</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {programmingLanguages.map((skill, id) => (
              <div
                className="bg-[#1a1d2f] p-6 rounded-lg border border-[#1f223c] shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center space-y-4 group"
                key={id}
              >
                <div className="icon-container h-24 w-24 rounded-full overflow-hidden bg-transparent shadow-md group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
                {skillsIcon(skill.name)}
                </div>
                <p className="text-white text-lg font-semibold text-center">{skill.name}</p>
                <div className="w-full mt-3 relative">
                  <div className="h-1 bg-[#1f223c] rounded-full">
                    <div
                      className="h-full bg-[#3498db] rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white text-center flex items-center justify-center space-x-2">
            <FaToolbox className="text-2xl" />
            <span>Tools</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {tools.map((skill, id) => (
              <div
                className="bg-[#1a1d2f] p-6 rounded-lg border border-[#1f223c] shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center space-y-4 group"
                key={id}
              >
                <div className="icon-container h-24 w-24 rounded-full overflow-hidden bg-transparent shadow-md group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
                  {skillsIcon(skill.name)}
                </div>
                <p className="text-white text-lg font-semibold text-center">{skill.name}</p>
                <div className="w-full mt-3 relative">
                  <div className="h-1 bg-[#1f223c] rounded-full">
                    <div
                      className="h-full bg-[#3498db] rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
