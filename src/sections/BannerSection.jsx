import React from "react";
import chocolate from "../assets/chocolate.svg";
import caramel from "../assets/caramel.svg";
import churros from "../assets/churros.svg";
import lavander from "../assets/lavander.svg";
import white from "../assets/white.svg";
import img1 from "../assets/blueline1.png";
import img2 from "../assets/orangeline1.png";

function BannerSection() {
  return (
    <section className="lg:pt-[100px] sm:pt-[40px] pt-[20px] text-blue flex flex-col gap-[20px] md:gap-20">
      <h1 className="text-blue text-center">Best Churros In Town</h1>
      <div className="relative">
        <img src={img1} alt="blueline" className="absolute -z-10 w-full top-36"></img>
        <img src={img2} alt="orangeline" className="absolute -z-10 w-full top-36 "></img>
      </div>

      <div className="flex justify-around align-start gap-4">
        <img
          src={caramel}
          alt="caramel"
          className="hidden hidden sm:block sm:max-w-[70px] md:max-w-[100px] xl:max-w-[152px] "
        ></img>
        <img
          src={white}
          alt="white"
          className="hidden sm:block sm:max-w-[70px] md:max-w-[100px] xl:max-w-[152px] "
        ></img>
        <img
          src={churros}
          alt="churros"
          className="max-w-[150px] xl:max-w-[280px]"
        ></img>
        <img
          src={chocolate}
          alt="chocolate"
          className="hidden sm:block sm:max-w-[70px] md:max-w-[100px] xl:max-w-[152px] "
        ></img>
        <img
          src={lavander}
          alt="lavander"
          className="hidden sm:block sm:max-w-[70px] md:max-w-[100px] xl:max-w-[152px] "
        ></img>
      </div>
    </section>
  );
}

export default BannerSection;
