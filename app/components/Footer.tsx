"use client";

import React from "react";
import Link from "next/link";
// import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#166499] text-white mt-10">
      <div className="flex flex-wrap justify-around p-6">
        <div className="flex-1 max-w-sm text-left m-4">
          <h3 className="text-xl font-semibold mb-4">About IEEE</h3>
          <p className="text-sm mb-4">
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.ieee.org/about/index.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} Learn more about IEEE
            </a>
            <a
              href="https://www.ieee.org/about/vision-mission.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} IEEE Mission & Vision
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-sm text-left m-4">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p className="text-sm mb-4">
            Our IEEE student branch is located within the NIT Jamshedpur campus,
            Adityapur, Jharkhand - 831014
          </p>
          <a
            href="https://www.ieee.org/about/contact.html"
            target="_blank"
            rel="noreferrer"
            className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md mb-4 block"
          >
            {">"} IEEE office locations
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14714.745506649784!2d86.12609155541993!3d22.77701740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1702625360018!5m2!1sen!2sin"
            className="w-full h-40 rounded-md border-2 border-white"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NIT Jamshedpur Location on Google Maps"
          ></iframe>
        </div>

        <div className="flex-1 max-w-sm text-left m-4">
          <h3 className="text-xl font-semibold mb-4">Membership</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} Join
            </a>
            <a
              href="https://www.ieee.org/membership/renew.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} Renew
            </a>
            <a
              href="https://www.ieee.org/membership/benefits/index.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} Benefits
            </a>
            <a
              href="https://www.ieee.org/about/news/index.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} IEEE Newsroom
            </a>
            <Link
              href="/admin/dashboard"
              className="bg-[#166499] hover:bg-[#005884] text-white px-4 py-2 rounded-md"
            >
              {">"} Admin Login
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 p-6">
        <a
          href="https://www.instagram.com/ieee.nitjsr/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-300 text-xl"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/ieee-nit-jamshedpur/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-300 text-xl"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.youtube.com/@IEEEStudentBranchNITJamshedpur"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-300 text-xl"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <button
          onClick={goToTop}
          className="text-white hover:text-gray-300 text-xl flex items-center gap-2"
        >
          <i className="fa-solid fa-circle-up"></i>
          <span>TOP OF PAGE</span>
        </button>
      </div>

      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">
          Copyright © 2025 All rights reserved | Made with ❤️ by IEEE-NIT JSR
        </p>
      </div>
    </div>
  );
};

export default Footer;
