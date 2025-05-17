import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-4 md:px-8 py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <img
            src="/images/logo.png"
            alt="Logan Square Car Wash Logo"
            className="w-40 md:w-48 mb-4"
          />
          <p className="text-gray-600 mb-6">
            Chicago’s best vehicle detailing services and car washes, over 28
            years in business. Stop by for a wash from our Logan Square Crew to
            see what we are all about.
          </p>

          <h3 className="text-gray-900 font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
            >
              <FaFacebookF className="text-gray-800" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
            >
              <FaInstagram className="text-gray-800" />
            </a>
          </div>

          <div className="mb-4">
            <p className="text-xl font-bold">773-227-5447</p>
          </div>

          <div className="mb-4">
            <span className="font-semibold">Email:</span>
            <br />
            <a
              href="mailto:jimmy@logansquarehandcarwash.com"
              className="text-gray-700 hover:underline"
            >
              jimmy@logansquarehandcarwash.com
            </a>
          </div>

          <div>
            <span className="font-semibold">Address:</span>
            <br />
            2436 N Milwaukee, Chicago, Illinois 60647
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">
            Hours of Operation
          </h3>
          <p className="text-gray-700 mb-2">Open 7 days a week</p>
          <p className="text-gray-700">Monday – Saturday: 8:00AM to 6:00PM</p>
          <p className="text-gray-700">Sunday: 8:00AM to 5:00PM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2023 Logan Square Hand Car Wash & Detailing. All Rights Reserved.
        Design by{" "}
        <a
          href="https://metadesignexperts.com"
          target="_blank"
          className="text-red-500 underline"
        >
          Metadesignexperts.com
        </a>
      </div>
    </footer>
  );
}
