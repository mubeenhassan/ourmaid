import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-36 h-[65vh]">
      <img
        src="https://lirp.cdn-website.com/94c95444/dms3rep/multi/opt/society-app-mobile-1920w.jpg"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 z-0"
      />
      <div className="z-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-7  px-4 md:px-8  text-white rounded-[15px] absolute mt-80 w-[85%] lg:w-[900px] mx-auto">
          <h1
            style={{ textShadow: "4px 4px 12px #000000" }}
            className="text-3xl drop-shadow-2xl md:text-6xl font-bold text-center tracking-[2px] mb-6 lg:mb-10"
          >
            START UP COSTS. YOU CAN FIND THIS FIGURES ON THE FDD AS WELL.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
