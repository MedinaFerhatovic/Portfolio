// @flow strict
import { FaGraduationCap } from 'react-icons/fa'; // Importujte novu ikonu
import { educations } from "@/app/data/education";

function Education() {
  return (
    <div id="education" className="relative border-t my-12 lg:my-24 border-[#25213b] pt-15">
      {/* Title Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl rounded-md">
            EDUCATION
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Education Cards Section */}
      <div className="py-8">
        <div className="flex flex-col items-center space-y-12">
          {educations.map((education, index) => (
            <div
              key={education.id}
              className={`relative w-full max-w-[550px] p-6 bg-gradient-to-r from-[#1a1d2f] to-[#25213b] rounded-2xl shadow-xl border border-[#1f223c] 
                          transform hover:scale-105 hover:rotate-2 transition-all duration-500 ease-in-out 
                          ${index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'}`}
            >
              {/* Education Card Content */}
              <div className="flex items-center justify-between space-x-6">
                <div className="flex-shrink-0 text-violet-500 hover:scale-125 transition-all duration-300">
                  <FaGraduationCap size={36} /> {/* Zamenjena ikona */}
                </div>
                <div className="w-full">
                  <p className="text-xs sm:text-sm text-teal-500">{education.duration}</p>
                  <p className="text-xl text-white mt-2 font-semibold">{education.title}</p>
                  <p className="text-sm text-gray-400">{education.institution}</p>
                </div>
              </div>

              {/* Hover Effect: Light Glow */}
              <div className="absolute inset-0 bg-[#1a1443] rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-300"></div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
