// @flow strict
import { personalData } from '@/app/data/personalData';
import Link from 'next/link';
import { FaLinkedinIn, FaMapMarkerAlt, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from './contact';

function ContactSection() {
  return (
    <div id="contact" className="border-t my-16 lg:my-20  border-[#25213b] relative mt-24 text-white px-6 lg:px-16">
      <div className="mt-10">
        <div className="flex flex-row items-center justify-center">
          <span className="h-[3px] w-20 bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-3 px-6 text-lg lg:text-xl rounded-md tracking-widest shadow-lg mx-4">
            CONTACT
          </span>
          <span className="h-[3px] w-20 bg-[#1a1443]"></span>
        </div>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Form Section */}
        <div className="lg:ml-12">
          <ContactForm />
        </div>

        {/* Contact Details Section */}
        <div className="lg:w-3/4 ml-20">
          <div className="flex flex-col gap-8 lg:gap-12">
            <p className="text-sm md:text-xl flex items-center gap-5">
              <FaEnvelope
                className="bg-[#1a1443] p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={40}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-5">
              <FaPhoneAlt
                className="bg-[#1a1443] p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={40}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-5">
              <FaMapMarkerAlt
                className="bg-[#1a1443] p-3 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={40}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-10 ml-20 flex items-center gap-8 lg:gap-8">
            <Link target="_blank" href={personalData.github}>
              <FaGithub
                className="bg-[#1a1443] p-4 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={50}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedin}>
              <FaLinkedinIn
                className="bg-[#1a1443] p-4 rounded-full hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer"
                size={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
