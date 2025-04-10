"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projectsData } from "@/app/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-[#25213b] py-20 px-4 bg-gradient-to-b from-[#0e0b1f] via-[#16132e] to-[#0e0b1f]"
    >
      {/* Title */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-4">
          <span className="w-16 h-[2px] bg-[#13c28f] animate-pulse"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13c28f] to-[#00ffd9]">
              My Projects
            </span>
          </h2>
          <span className="w-16 h-[2px] bg-[#13c28f] animate-pulse"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex justify-center items-center px-4">
        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.2, x: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute left-4 md:left-10 z-10 text-white bg-white/20 border border-white/30 backdrop-blur-xl p-3 rounded-full shadow-lg hover:bg-[#13c28f] hover:text-[#0e0b1f] transition-all duration-300"
        >
          &#8592;
        </motion.button>

        {/* Project Card */}
        <AnimatePresence mode="wait">
          <Tilt
            glareEnable={true}
            glareColor="#13c28f"
            glareMaxOpacity={0.1}
            scale={1.02}
            transitionSpeed={400}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="project-card w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl rounded-2xl overflow-hidden transition-transform transform"
            >
              {/* Image */}
              <div className="relative w-full h-[250px]">
                <Image
                  src={projectsData[currentIndex].image}
                  alt={projectsData[currentIndex].name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#13c28f]">{projectsData[currentIndex].name}</h3>

                <div>
                  <h4 className="text-base font-medium text-white/80">Description</h4>
                  <p className="text-sm text-white/70 text-justify">
                    {projectsData[currentIndex].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium text-white/80">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projectsData[currentIndex].tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-[#13c28f]/10 text-[#13c28f] border border-[#13c28f]/50 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium text-white/80">Role</h4>
                  <p className="text-sm text-white/70">{projectsData[currentIndex].role}</p>
                </div>

                <a
                  href={projectsData[currentIndex].link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gradient-to-r from-[#13c28f] to-[#00ffd9] text-[#1a1443] font-semibold py-2 px-6 rounded-full hover:brightness-110 hover:shadow-[0_0_15px_#00ffd9] transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </Tilt>
        </AnimatePresence>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.2, x: 3 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute right-4 md:right-10 z-10 text-white bg-white/20 border border-white/30 backdrop-blur-xl p-3 rounded-full shadow-lg hover:bg-[#13c28f] hover:text-[#0e0b1f] transition-all duration-300"
        >
          &#8594;
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="mt-10 flex justify-center gap-2">
        {projectsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-[#13c28f]" : "bg-white/20"
            }`}
          ></button>
        ))}
      </div>

      {/* Project Counter */}
      <div className="mt-4 text-center text-sm text-white/40">
        Project {currentIndex + 1} of {projectsData.length}
      </div>
    </motion.div>
  );
};

export default Projects;
