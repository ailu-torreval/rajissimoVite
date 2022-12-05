import React from "react";
import chocolate from "../assets/chocolate.svg";
import caramel from "../assets/caramel.svg";
import churros from "../assets/churros.svg";
import lavander from "../assets/lavander.svg";
import white from "../assets/white.svg";

function BannerSection() {
  return (
    <section className="mx-8 my-2 md:py-[100px] py-[40px] text-blue flex flex-col gap-20">
      <h1 className="text-blue text-center">Best Churros In Town</h1>
      <div className="flex justify-around align-start gap-8">
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
