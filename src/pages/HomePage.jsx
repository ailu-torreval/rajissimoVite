import React, { useContext } from "react";
import HeroSection from "../sections/HeroSection";
import BannerSection from "../sections/BannerSection";
import Section from "../sections/Section";
import SubscriptionSection from "../sections/SubscriptionSection";
import { PageContext } from "../contexts/PageContext";
import img from "../assets/hero.png";

function HomePage() {
  const { page, setPage } = useContext(PageContext);

  function goToMenu() {
    console.log("menu");
    setPage("menuPage");
  }

  function goToAbUs() {
    console.log("menu");
    setPage("abUsPage");
  }

  function goToSubsPage() {
    console.log("subs");
    setPage("subsPage");
  }

  return (
    <>
      <HeroSection />
      <BannerSection />
      <Section
        img={img}
        class="flex flex-col md:flex-row justify-center md:gap-x-24 mx-8 my-2 md:py-[100px] py-[40px]"
        title="FRIENDS. WAFFLES. ENJOY"
        titleClass="text-blue"
        content="No matter what you are doing or who you are spending time with, waffles are always a good idea. Our delicious and delicate waffles, dipped in homemade chocolate and sprinkled with your favourites toppings will delight you."
        contentClass="text-blue"
        btnContent="See Menu ➔"
        btnClass="btn2"
        btnAction={goToMenu}
      />
      <Section
        img={img}
        class="flex flex-col-reverse md:flex-row-reverse justify-center md:gap-x-24 md:py-[100px] mx-8 my-2 py-[40px]"
        title="FROM THE SCRATCH…
        AS WELL AS EVERYDAY"
        titleClass="text-blue"
        content="It all started when our CEO and founder Nader Raja had his first ice cream as a youngster. The experience pivoted him on a journey – a journey just like Willy Wonka’s pursuit for the most inovative ways to amaze the world with his sweet treats."
        contentClass="text-blue"
        btnContent="About Us ➔"
        btnClass="btn2"
        btnAction={goToAbUs}
      />
      <SubscriptionSection
        class="my-4 mx-auto flex flex-col justify-center text-center items-center bg-white max-w-4xl gap-2 md:py-[100px] py-[40px] px-8"
        title="MEET OUR NEW SUBSCRIPTION CARD"
        titleClass="text-blue text-center"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae voluptatum vel voluptate, mollitia provident asperiores quibusdam deserunt! Maxime reiciendis quidem magni voluptas ut, eius quod unde incidunt recusandae nemo."
        contentClass="text-blue"
        btnContent="Learn More ➔"
        btnClass="btn1"
        btnAction={goToSubsPage}
      />
    </>
  );
}

export default HomePage;
