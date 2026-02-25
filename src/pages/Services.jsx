import React from "react";
import { HeroService } from "../components/HeroService";
import InfiniteLogoScroll from "../components/InfiniteLogoScroll";
import ViewProcessCta from "../components/ViewProcessCta";
import { OurServices } from "../components/OurServices";

const Services = () => {
  return (
    <>
      <HeroService></HeroService>
      <OurServices></OurServices>
      <InfiniteLogoScroll></InfiniteLogoScroll>
      <ViewProcessCta></ViewProcessCta>
    </>
  );
};
export default Services;
