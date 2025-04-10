"use client";

import Link from "next/link";
import "../../../styles/globals.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Nav links array for DRY code
  const navLinks = [
    { href: "/#about", text: "ABOUT" },
    { href: "/#skills", text: "SKILLS" },
    { href: "/#experience", text: "EXPERIENCES" },
    { href: "/#education", text: "EDUCATION" },
    { href: "/#projects", text: "PROJECTS" },
    { href: "/#contact", text: "CONTACT" }
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 text-white shadow-lg transition duration-300 font-[Poppins] w-full ${
        scrolled ? "bg-[rgba(13,18,36,0.95)]" : "bg-[rgba(13,18,36,0.9)]"
      }`}
    >
      <div className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-10">
        {/* Brand Name */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-teal-500 text-xl sm:text-2xl md:text-3xl font-bold hover:text-[#0db0a1] transition-all tracking-wider opacity-80"
          >
            MEDINA FERHATOVIĆ
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex md:space-x-5 lg:space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-white text-base lg:text-lg font-semibold transition-colors duration-300 hover:text-[#16f2b3] hover:scale-105"
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 pb-4">
          {navLinks.map((link, index) => (
            <li key={index} className="border-b border-gray-700 pb-2">
              <Link
                className="text-white text-lg font-medium transition-colors duration-300 hover:text-[#16f2b3] block py-2"
                href={link.href}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;