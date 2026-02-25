import React from "react";
import Hero from "../components/Hero";
import ViewProcessCta from "../components/ViewProcessCta";
import Advantage from "../components/Advantage";
import { TrustedBy } from "../components/TrustedBy";
import { AboutUs } from "../components/AboutUs";
import Faq from "../components/Faq";
import ServicesSection from "../components/ServicesSection";
import InfiniteLogoScroll from "../components/InfiniteLogoScroll";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <TrustedBy></TrustedBy>
      <InfiniteLogoScroll></InfiniteLogoScroll>
      <AboutUs></AboutUs>
      <Faq></Faq>
      <ServicesSection></ServicesSection>
      <Advantage></Advantage>
      <ViewProcessCta></ViewProcessCta>
    </>
  );
};
export default Home;
