import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gray-600 text-white text-center px-4">
      <p className="text-sm md:text-base opacity-80">Performance in motion</p>
      <h1 className="text-2xl md:text-4xl font-semibold mt-2">
        Soft Trims and NVH Solutions
      </h1>
      <p className="text-lg md:text-2xl opacity-80 mt-1">
        for seamless rides
      </p>
    </section>
  );
};

export default HeroSection;
