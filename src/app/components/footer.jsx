import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0d1224] via-[#24293c] to-[#1e2531] text-white py-12">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Footer Top - Social links */}
        <div className="flex flex-col sm:flex-row justify-between items-center md:items-start space-y-6 sm:space-y-0 mb-10">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold mb-2">Get In Touch</p>
            <p className="text-sm text-gray-400">
              Want to discuss a project or have a question? Feel free to reach out!
            </p>
            <div className="flex items-center justify-center sm:justify-start mt-4 gap-4">
              <Link
                href="https://www.linkedin.com/in/medina-ferhatović-41b31723a"
                target="_blank"
                className="text-teal-500 text-2xl hover:text-[#0db0a1] transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          <div className="sm:ml-12 text-center">
            <p className="text-lg font-semibold mb-2">Quick Links</p>
            <div className="flex justify-center sm:justify-start gap-4">
              <Link href="#about" className="hover:text-[#16f2b3] transition-all">About</Link>
              <Link href="#projects" className="hover:text-[#16f2b3] transition-all">Projects</Link>
              <Link href="#contact" className="hover:text-[#16f2b3] transition-all">Contact</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="border-t border-[#353951] pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-teal-500">Medina Ferhatović</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
