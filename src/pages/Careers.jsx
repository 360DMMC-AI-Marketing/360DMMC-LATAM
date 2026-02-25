import React from "react";
import { HeroCareer } from "../components/HeroCareer";
import { WhyUs } from "../components/WhyUs";
import { OpenPositions } from "../components/OpenPositions";
import { ApplyForm } from "../components/ApplyForm";
import { CareersCTA } from "../components/CareersCTA";

const Careers = () => {
  return (
    <>
      <HeroCareer></HeroCareer>
      <WhyUs></WhyUs>
      <OpenPositions></OpenPositions>
      <ApplyForm></ApplyForm>
      <CareersCTA></CareersCTA>
    </>
  );
};
export default Careers;
