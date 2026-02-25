import React from "react";
import { VisitUs } from "../components/visitUs";
import { ContactForm } from "../components/ContactForm";
import { HeroContact } from "../components/HeroContact";

const Contact = () => {
  return (
    <>
      <div className=" max-sm:mx-10 mx-auto px-[5vw] max-w-[1200px] my-10 flex justify-center item-center gap-10 max-sm:block">
        <div className="flex flex-col items-center justify-center max-sm:block max-sm:mb-10">
          <HeroContact></HeroContact>
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};
export default Contact;
