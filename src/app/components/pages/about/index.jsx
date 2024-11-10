// @flow strict

import { personalData } from "@/app/data/personalData";
import Image from "next/image";

function AboutSection() {
  return (
    <div 
      id="about" 
      className="my-16 lg:my-20 relative bg-gradient-to-br from-[#1c2a41] via-[#1e3a60] to-[#1c2a41] py-20 px-8 lg:px-16 rounded-2xl shadow-2xl text-gray-200"
    >
      {/* Title Section */}
      <div className="hidden lg:flex flex-col items-center absolute top-10 -left-10">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-3 px-6 text-lg lg:text-xl rounded-md tracking-widest shadow-lg">
          ABOUT ME
        </span>
        <span className="h-48 w-[3px] bg-[#1a1443] mt-4"></span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* Text Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 lg:space-y-6">
          <p className="text-xl lg:text-2xl text-gray-100 font-light leading-relaxed tracking-wide ml-5 text-justify">
            {personalData.description}
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={300}
            height={300}
            alt="Medina Ferhatović"
            className="rounded-lg transition-transform duration-1000 hover:scale-110 shadow-2xl border-[6px] border-[#1a1443] p-1"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
