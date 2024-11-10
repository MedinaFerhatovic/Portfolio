// @flow strict

import { experiences } from "@/app/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";

function Experience() {
  return (
    <div id="experience" className="relative border-t my-12 lg:my-24 border-[#25213b] px-4 lg:px-8">
     <div className="mt-10">
       <div className="flex flex-row items-center justify-center">
         <span className="h-[3px] w-20 bg-[#1a1443]"></span>
         <span className="bg-[#1a1443] text-white p-3 px-6 text-lg lg:text-xl rounded-md tracking-widest shadow-lg mx-4">
          EXPERIENCES
         </span>
         <span className="h-[3px] w-20 bg-[#1a1443]"></span>
       </div>
     </div>

      {/* Experience Cards Section */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative p-6 bg-gradient-to-br from-[#1a1d2f] to-[#25213b] rounded-lg shadow-md border border-[#1f223c] 
                          hover:shadow-lg transform hover:scale-105 transition-all duration-300 
                          ${index % 2 === 0 ? 'lg:ml-6' : 'lg:mr-6'}`}
            >
              <div className="flex items-center gap-6">
                <div className="text-violet-500 flex-shrink-0">
                  <BsPersonWorkspace size={36} />
                </div>

                <div>
                  <p className="text-lg lg:text-xl uppercase text-white mb-1 font-light">
                    {experience.title}
                  </p>
                  <p className="text-sm text-gray-400">{experience.company}</p>
                  <p className="text-xs text-teal-500 mt-1">{experience.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
