import React from "react";
import AboutUsSection from "../sections/AboutUsSection";
import img from "../assets/nyhavn.png";
import img2 from "../assets/nyhavn-christmas.png";
import img3 from "../assets/all-products.png";
import Quote from "../components/Quote";

function AbUsPage() {
  return (
    <div>
      <h2 className="uppercase underline text-center pt-[40px] md:pt-[100px]">
        How it all started
      </h2>
      <AboutUsSection
        img={img}
        class="flex flex-col items-center md:flex-row justify-center md:gap-x-24 mx-8 my-2 md:py-[100px] py-[40px]"
        title="ABOUT ICE"
        titleClass="text-blue uppercase"
        content="We all know that the wishes of the mother must be fulfilled. Especially when this dream comes from a sweet memory of you enjoying your first ice cream with her. When you don’t know if it comes from the taste of this ice cream, the pride in your mother’s eyes or the joy of being with her. And this is what Nader Rajja started to do in 2006, when he opened his first ice cream shop at the Strøget."
        contentClass="text-blue max-w-[618px]"
      />
      <Quote
        class="text-header text-blue text-2xl md:text-3xl max-w-6xl text-center m-auto font-bold px-8 py-[40px]"
        text="“My mother’s big dream was that one day I should have my own ice Store in Nyhavn, which I said was impossible.” - Nader Rajja, CEO"
      />
      <AboutUsSection
        img={img2}
        title="Welcome, Nyhavn"
        class="flex flex-col items-center md:flex-row-reverse justify-center md:gap-x-24 mx-8 my-2 md:py-[100px] py-[40px]"
        titleClass="text-blue uppercase"
        content="Rajissimo becomes true a couple of years later. It was a hot morning when, on July 19, 2011, Nader signed the contract to open a shop in Nyhvan. The shop that we all know today as the sweetest corner in Copenhagen. And the shop that made it possible to build the largest ice cream chain in Europe, in which the innovative culture that characterizes Rajissimo has born. "
        contentClass="text-blue max-w-[618px]"
      />
      <Quote
        class="text-header text-blue text-2xl md:text-3xl max-w-6xl text-center m-auto font-bold px-8 py-[40px]"
        text="“I have travelled the world for the last 15 years learning from the best gelato, churros and dessert manufacturers and vendors and hired experts from all over the world.” - Nader Rajja, CEO."
      />
      <section className="mx-4 flex flex-col justify-between md:py-[100px] py-[40px]">
        <h3 className="uppercase md:ml-24 xl:ml-48">The Churros bites</h3>
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
        class="flex flex-col items-center md:flex-row-reverse justify-center md:gap-x-24 mx-8 my-2 md:py-[100px] py-[40px]"
        titleClass="text-blue uppercase"
        content="Our gelatos are always fresh, produced same day in our fabbrica di gelato. We have a six-hour policy on our churros dough to ensure it is nice and fresh. Daily oil change ensures our churros are crunchy on the outside and mushy n’ tender inside and have the perfect golden trademark colour that only Rajissimo churros have.
        "
        contentClass="text-blue max-w-[618px]"
      />
    </div>
  );
}

export default AbUsPage;
