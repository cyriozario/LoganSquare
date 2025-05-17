import React from "react";
import teamPhoto from "../../public/images/logansquare.webp";
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
          <div className="bg-white p-4 rounded-2xl shadow-md w-full flex-1">
            <img
              src={teamPhoto}
              alt="Our Logan Square Crew"
              className="rounded-lg filter grayscale object-cover w-full"
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1 space-y-6 md:pt-2">
            <p className="text-lg text-gray-700">
              Chicago’s best vehicle detailing services and car washes, over 28
              years in business. Stop by for a wash from our Logan Square Crew
              to see what we are all about.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <GiCheckMark className="mt-1 mr-3 text-blue-600" />
                <span>Over 28 years of hand‑crafted detailing expertise.</span>
              </li>
              <li className="flex items-start">
                <GiCheckMark className="mt-1 mr-3 text-blue-600" />
                <span>Eco‑friendly soaps & meticulous crew practices.</span>
              </li>
              <li className="flex items-start">
                <GiCheckMark className="mt-1 mr-3 text-blue-600" />
                <span>
                  Trained professionals delivering world‑class service.
                </span>
              </li>
              <li className="flex items-start">
                <GiCheckMark className="mt-1 mr-3 text-blue-600" />
                <span>Experience the difference at Logan Square Car Wash.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SectionMotion>
  );
}
