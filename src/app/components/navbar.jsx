import Link from "next/link";
import "../../../styles/globals.css"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 text-white shadow-lg transition duration-300 font-[Poppins]" style={{ background: "rgba(13, 18, 36, 0.9)" }}>
      <div className="flex items-center justify-between py-6 px-10">
        {/* Brand Name */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-teal-500 text-3xl font-bold hover:text-[#0db0a1] transition-all tracking-wider opacity-80"
          >
            MEDINA FERHATOVIĆ
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex md:space-x-8">
          <li>
            <Link
              className="text-white text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
              href="/#about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
              href="/#skills"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
              href="/#experience"
            >
              EXPERIENCES
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
              href="/#education"
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
              href="/#projects"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
              href="/#contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu icon or button */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
