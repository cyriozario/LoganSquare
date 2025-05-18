import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-4 md:px-8 py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <img
            src="/images/d&m.webp"
            alt="Logan Square Car Wash Logo"
            className="w-40 md:w-48 mb-6"
          />

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
            <p className="text-xl font-bold">+219-293-1828</p>
          </div>

          <div className="mb-4">
            <span className="font-semibold">Email:</span>
            <br />
            <a
              href="mailto:jimmy@logansquarehandcarwash.com"
              className="text-gray-700 hover:underline"
            >
              booking@dandmdetailing.com
            </a>
          </div>

          <div>
            <span className="font-semibold">Address:</span>
            <br />
            2001 w 15th ave Gary, IN 46404
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Business Hours</h3>
          <div className="text-gray-700 text-sm space-y-1 font-medium">
            <div className="flex justify-between">
              <span>Monday</span>
              <span>Appointment Only</span>
            </div>
            <div className="flex justify-between">
              <span>Tuesday</span>
              <span>Appointment Only</span>
            </div>
            <div className="flex justify-between">
              <span>Wednesday</span>
              <span>10 AM – 6 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Thursday</span>
              <span>10 AM – 6 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday</span>
              <span>10 AM – 6 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>10 AM – 6 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>10 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      {/* Bottom */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} D&M Car Wash & Detailing. All Rights
        Reserved.
      </div>
    </footer>
  );
}
