import React from "react";
import HeroContent from "../components/HeroContent";
import HeroImg from "../components/HeroImg";

function HeroSection() {
  return (
    <section className="flex flex-col gap-4 justify-center h-full md:flex-row mx-[40px] md:mx-[100px]">
      <HeroImg />
      <HeroContent />
    </section>
  );
}

export default HeroSection;
