import React from "react";
import { ArrowRight } from "lucide-react";

const FramerArrow = () => {
  return (
    <span className="relative w-4 h-4 overflow-hidden">
      <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-4">
        <ArrowRight size={16} />
      </span>
      <span className="absolute inset-0 -translate-x-4 transition-transform duration-300 ease-out group-hover:translate-x-0">
        <ArrowRight size={16} />
      </span>
    </span>
  );
};
export default FramerArrow;
