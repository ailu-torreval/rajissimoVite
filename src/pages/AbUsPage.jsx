import React from "react";
import AboutUsSection from "../sections/AboutUsSection";
import img from "../assets/nyhavn.png";
import img2 from "../assets/nyhavn-christmas.png";
import img3 from "../assets/all-products.png";
import Quote from "../components/Quote";
import img4 from "../assets/blueline2.png";
import img5 from "../assets/orangeline2.png";
import LocationsSection from "../sections/LocationsSection";

function AbUsPage() {
  return (
    <div>
      <div className="relative">
        <img
          src={img4}
          alt="blueline"
          className="absolute -z-10 w-full top-0"
        ></img>
        <img
          src={img5}
          alt="orangeline"
          className="absolute -z-10 w-full top-32 "
        ></img>
      </div>
      <h2 className="uppercase underline text-center pt-[40px] md:pt-[100px] sm:m-[40px] m-[20px]">
        How it all started
      </h2>
      <AboutUsSection
        img={img}
        class="flex flex-col items-center md:flex-row justify-center sm:gap-x-8 md:gap-x-16 lg:gap-x-24 lg:p-[100px] sm:p-[40px] p-[20px]"
        title="ABOUT ICE"
        titleClass="text-blue uppercase"
        content="We all know that the wishes of the mother must be fulfilled. Especially when this dream comes from a sweet memory of you enjoying your first ice cream with her. When you don’t know if it comes from the taste of this ice cream, the pride in your mother’s eyes or the joy of being with her. And this is what Nader Rajja started to do in 2006, when he opened his first ice cream shop at the Strøget."
        contentClass="text-blue max-w-[618px]"
      />
      <Quote
        class="text-header text-blue text-2xl md:text-3xl max-w-6xl text-center m-auto font-bold text-center p-[40px]"
        text="“My mother’s big dream was that one day I should have my own ice Store in Nyhavn, which I said was impossible.” - Nader Rajja, CEO"
      />
      <AboutUsSection
        img={img2}
        title="Welcome, Nyhavn"
        class="flex flex-col items-center md:flex-row-reverse justify-center sm:gap-x-8 md:gap-x-16 lg:gap-x-24 lg:p-[100px] sm:p-[40px] p-[20px]"
        titleClass="text-blue uppercase"
        content="Rajissimo becomes true a couple of years later. It was a hot morning when, on July 19, 2011, Nader signed the contract to open a shop in Nyhvan. The shop that we all know today as the sweetest corner in Copenhagen. And the shop that made it possible to build the largest ice cream chain in Europe, in which the innovative culture that characterizes Rajissimo has born. "
        contentClass="text-blue max-w-[618px]"
      />
      <Quote
        class="text-header text-blue text-2xl md:text-3xl max-w-6xl text-center m-auto font-bold p-[40px]"
        text="“I have travelled the world for the last 15 years learning from the best gelato, churros and dessert manufacturers and vendors and hired experts from all over the world.” - Nader Rajja, CEO."
      />
      <svg
        width="1440"
        height="792"
        viewBox="0 0 1440 792"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute -z-10 "
      >
        <path
          d="M1615.74 789.727C1251.41 445.685 888.03 512.026 614.115 455.495C340.2 398.963 -282.704 -5.71379 -151.818 3.7499"
          stroke="#00B7B4"
          strokeWidth="6"
        />
      </svg>
      <svg
        width="1440"
        height="979"
        viewBox="0 0 1440 979"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full absolute -z-10"
      >
        <path
          d="M1532.03 976.459C1406.09 796.743 758.333 651.87 475.066 525.237C191.799 398.603 -165.415 2.96127 -165.415 2.96127"
          stroke="#FAAF3D"
          strokeWidth="6"
        />
      </svg>
      <section className="mx-[20px] sm:mx-[40px] lg:mx-[100px] flex flex-col justify-between md:pt-[100px] pt-[40px]">
        <h3 className="uppercase">The Churros bites</h3>
        <div className="relative m-auto text-center md:p-12">
          <p className="max-w-[354px] border border-2 rounded-[20px] border-lightyellow mx-2 p-2 md:p-10 bg-white z-10 asymbox md:max-w-[700px] lg:max-w-[850px]">
            Nader and our “dream team” always look for new innovative ways of
            perfecting Rajissimo’s products and create new spectacular
            experiences for our beloved customers. Latest invention is the
            Churros Bites™. A mouth sized churro that is designed exclusively
            for delivery. The Churro Bites™ fits perfectly in our zero-waste
            delivery boxes and drastically optimizes the churros in the box. We
            call it zero-air policy.
          </p>
        </div>
      </section>
      <AboutUsSection
        img={img3}
        title="RAJISSIMO FOR EVERYONE"
        class="flex flex-col items-center md:flex-row justify-center sm:gap-x-8 md:gap-x-16 lg:gap-x-24 lg:m-[100px] sm:m-[40px] m-[20px]"
        content="Our gelatos are always fresh, produced same day in our fabbrica di gelato. We have a six-hour policy on our churros dough to ensure it is nice and fresh. Daily oil change ensures our churros are crunchy on the outside and mushy n’ tender inside and have the perfect golden trademark colour that only Rajissimo churros have.
        "
        contentClass="text-blue max-w-[618px]"
      />
      <LocationsSection
        class="flex flex-col items-center mx-8 my-2 gap-8 lg:p-[100px] sm:p-[40px] p-[20px] md:gap-12"
        title="Visit Rajissimo"
        titleClass="underline uppercase"
      />
    </div>
  );
}

export default AbUsPage;
