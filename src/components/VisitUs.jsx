import { Locate, Mail, MapPin } from "lucide-react";
//import { motion } from "framer-motion";

import React from "react";

export const VisitUs = () => {
  return (
    <>
      <div className="my-10">
        {/* <h1 className="font-semibold text-4xl pb-5 max-sm:text-3xl max-sm:leading-tight">
          Visit Us
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden"
        >
          <div className="w-[450px] h-[350px]">
            <iframe
              title="Chicago Map"
              src="https://www.google.com/maps?q=1+East+Erie+Street+Chicago+IL+60611&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div> */}

        <div>
          <div className="flex text-md items-center gap-2 mb-3">
            <MapPin className="w-5"></MapPin>
            <p>1 East Erie Street Suite 525-2501 Chicago, IL 60611</p>
          </div>
          <div className="flex text-md items-center gap-2 mb-3 ">
            <Mail className="w-5"></Mail>
            <p>Consult@360DMMC.com</p>
          </div>
          <div className="flex text-md items-center gap-2 ">
            <img
              src="https://cdn.simpleicons.org/whatsapp/25D366"
              alt="WhatsApp"
              class="w-5"
            />
            <p>+1 844 491-3441</p>
          </div>
        </div>
      </div>
    </>
  );
};
