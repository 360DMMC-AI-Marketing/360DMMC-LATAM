import React from "react";
import { HeroProcess } from "../components/HeroProcess";
import { OurProcess } from "../components/OurProcess";
import { ProcessCTA } from "../components/ProcessCTA";
import Faq from "../components/Faq";

const Process = () => {
  return (
    <>
      <HeroProcess></HeroProcess>
      <OurProcess></OurProcess>
      <Faq></Faq>
      <ProcessCTA></ProcessCTA>
    </>
  );
};
export default Process;
