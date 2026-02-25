import React, { useEffect, useState } from "react";
import {
  Megaphone,
  Briefcase,
  Code,
  Palette,
  Brain,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  Megaphone,
  Briefcase,
  Code,
  Palette,
  Brain,
  BarChart3,
};

export const OpenPositions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("/positions.json")
      .then((res) => res.json())
      .then((data) => setPositions(data))
      .catch((err) => console.error("Failed to load positions", err));
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto max-sm:mx-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-4xl font-semibold text-[#222222]">
            Open Internship Positions
          </h1>
          <p className="font-sans text-lg mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore our current internship opportunities across different
            departments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((role) => {
            const Icon = iconMap[role.icon];

            return (
              <div
                key={role.id}
                className="border border-gray-300 rounded-xl p-6 "
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-400 mb-4">
                  {Icon && <Icon className="text-white" size={22} />}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-[#222222] mb-2">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-md text-gray-600 mb-4">
                  {role.description}
                </p>

                {/* Requirements */}
                <ul className="space-y-2">
                  {role.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 font-sans text-md text-gray-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#23378C] mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
