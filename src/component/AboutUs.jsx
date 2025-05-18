import React from "react";
import vector from "../../public/images/vector.jpg";
import { GiCheckMark } from "react-icons/gi";
import { SectionMotion } from "./SectionMotion";
import TextReveal from "./TextReveal";

export default function AboutUs() {
  return (
    <SectionMotion>
      <section className="bg-white px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-6 text-center mb-6">
          {/* Kicker */}
          <TextReveal>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Learn more about our history and values
            </p>
          </TextReveal>

          {/* Section Heading */}
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
          </TextReveal>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="w-full flex-1">
            <img
              src={vector}
              alt="Our D&M Mobile Van"
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1 space-y-6 md:pt-2 text-gray-700">
            <p className="text-lg">
              D&M Car Wash and Detail Center was founded in 2020 by Torrey
              Harper and Jawann Fondren. These two gentlemen worked together at
              a diesel mechanic shop, and during that time, they lost their
              mother and grandmother within six months of each other. Soon after
              their passings, Torrey and Jawann decided to go into business
              together. First, they built a mobile detailing van and started a
              mobile detailing service. That detailing service has grown into
              the brick and mortar you see today. To honor the important women
              they lost, they named the business after Torrey’s grandmother,
              Doris, and Jawann‘s mother, Michelle.
            </p>
          </div>
        </div>
      </section>
    </SectionMotion>
  );
}
