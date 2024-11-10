// @flow strict

import { personalData } from "@/app/data/personalData";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function FirstPage() {
  return (
    <section className="relative flex flex-col items-center justify-between py-16 lg:py-28 bg-gradient-to-r from-[#1c2a41] via-[#1e3a60] to-[#1c2a41] text-white">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-screen-xl mx-auto">
        
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-6 lg:p-12">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-8">
            Dedicated to making a lasting impact, <br />
            fueled by a love for learning and growth.
        </h1>


          <div className="my-8 flex gap-10 justify-start">
            <Link href={personalData.github} target="_blank" className="text-teal-500 hover:scale-110 transition-transform duration-300">
              <BsGithub size={32} />
            </Link>
            <Link href={personalData.linkedin} target="_blank" className="text-teal-500 hover:scale-110 transition-transform duration-300">
              <BsLinkedin size={32} />
            </Link>
          </div>

          <div className="flex gap-8 mt-10">
            <Link href="#contact" className="bg-gradient-to-r from-teal-400 to-indigo-500 p-[2px] rounded-full">
              <button className="px-10 py-5 bg-[#1e2a34] rounded-full text-white uppercase font-semibold tracking-wider hover:bg-teal-400 flex items-center gap-3 transition-all duration-300">
                <span>Contact Me</span>
                <RiContactsFill size={20} />
              </button>
            </Link>
            <Link href={personalData.resume} target="_blank" className="bg-gradient-to-r from-indigo-400 to-teal-500 p-[2px] rounded-full">
              <button className="px-10 py-5 bg-[#1e2a34] rounded-full text-white uppercase font-semibold tracking-wider flex items-center gap-3 transition-all duration-300">
                <span>Get Resume</span>
                <MdDownload size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2 bg-[#2a3c54] rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <code className="font-mono text-sm leading-relaxed text-[#A1B4C1]">
              <div><span className="text-teal-400">const</span> myProfile = {'{'}</div>
              <div className="ml-8">
                <span className="text-indigo-400">name</span>: <span className="text-teal-500">"{personalData.name}"</span>,
              </div>
              <div className="ml-8">
                <span className="text-indigo-400">traits</span>: <span className="text-teal-500">["Responsible", "Ambitious", "Eager to Learn"]</span>,
              </div>
              <div className="ml-8">
                <span className="text-indigo-400">approach</span>: <span className="text-teal-500">"Adaptable and solution-oriented, always ready to take on new challenges."</span>,
              </div>
              <div className="ml-8">
                <span className="text-indigo-400">vision</span>: <span className="text-teal-500">"To grow professionally, continuously improve my skills, and contribute meaningfully to every project I take on"</span>,
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-teal-500">mission:</span>
                <span className="text-teal-400">function</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-12">
                return this.<span className="text-indigo-400">traits</span>.includes(<span className="text-teal-500">"Responsible"</span>) && 
                this.<span className="text-indigo-400">traits</span>.includes(<span className="text-teal-500">"Ambitious"</span>) &&
                this.<span className="text-indigo-400">traits</span>.includes(<span className="text-teal-500">"Eager to Learn"</span>);
              </div>
              <div className="ml-8">{'}'}</div>
              <div>{'}'}</div>
            </code>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FirstPage;
