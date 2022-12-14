import React, { useContext } from "react";
import HeroSection from "../sections/HeroSection";
import BannerSection from "../sections/BannerSection";
import Section from "../sections/Section";
import SubscriptionSection from "../sections/SubscriptionSection";
import { PageContext } from "../contexts/PageContext";
import img1 from "../assets/waffle_sticks.png";
import img2 from "../assets/secblob.png";
function HomePage() {
  const { page, setPage } = useContext(PageContext);

  function goToMenu() {
    console.log("menu");
    setPage("menuPage");
    window.location = '#';

  }

  function goToAbUs() {
    console.log("menu");
    setPage("abUsPage");
    window.location = '#';

  }

  function goToSubsPage() {
    console.log("subs");
    setPage("subsPage");
    window.location = '#';

  }

  return (
    <>
      <HeroSection />
      <BannerSection />
      <Section
        img={img1}
        class="flex flex-col md:flex-row gap-y-8 md:gap-x-8 justify-center lg:gap-x-24 lg:m-[100px] m-[40px] "
        title="FRIENDS. WAFFLES. ENJOY"
        titleClass="text-blue"
        content="No matter what you are doing or who you are spending time with, waffles are always a good idea. Our delicious and delicate waffles, dipped in homemade chocolate and sprinkled with your favourites toppings will delight you."
        contentClass="text-blue"
        btnContent="See Menu ➔"
        btnClass="btn2"
        btnAction={goToMenu}
      />
      <Section
        img={img2}
        abus={true}
        class="flex flex-col md:flex-row-reverse gap-y-8 md:gap-x-8 justify-center lg:gap-x-24 lg:m-[100px] m-[40px] lg:mt-[140px]"
        title="FROM THE SCRATCH…
        AS WELL AS EVERYDAY"
        titleClass="text-blue"
        content="It all started when our CEO and founder Nader Rajja had his first ice cream as a youngster. The experience pivoted him on a journey – a journey just like Willy Wonka’s pursuit for the most inovative ways to amaze the world with his sweet treats."
        contentClass="text-blue"
        btnContent="About Us ➔"
        btnClass="btn2"
        btnAction={goToAbUs}
      />
      <SubscriptionSection
        containerClass="lg:mt-[160px] md:-mb-[200px] py-[40px] bg-box flex items-center justify-center z-50 md:relative m-auto"
        class="flex flex-col gap-1 md:gap-4 rounded-[20px] my-[20px] text-center bg-white max-w-4xl py-[10px] mx-[26px] max-w-[265px] px-1 sm:max-w-[947px] sm:mx-12 sm:py-[10px] sm:px-[2px] md:p-[20px] lg:p-[40px]"
        title="DISCOVER OUR SUBSCRIPTION BOX"
        titleClass="text-blue text-center"
        content="Every month we select an assortment of new and well known products to put into our Treatsboxes. Our Regular size box contains an assortment of 3 - 5 products. Sign up for our offer and get all the sweets you can eat on a monthly rage!"
        contentClass="text-blue"
        btnContent="Learn More ➔"
        btnClass="btn1"
        btnAction={goToSubsPage}
      />
    </>
  );
}

export default HomePage;
