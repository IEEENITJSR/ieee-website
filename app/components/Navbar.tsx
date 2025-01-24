"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white text-black flex justify-between items-center p-4 md:px-8 shadow-md sticky top-0 z-50">
      {/* Logo and Heading */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold">IEEE Student Branch</h1>
            <h2 className="text-sm font-medium">NIT Jamshedpur</h2>
          </div>
        </Link>
      </div>

      {/* Links for larger screens */}
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute md:relative top-16 left-0 md:top-auto md:left-auto md:flex flex-col md:flex-row bg-white w-full md:w-auto md:space-x-4 space-y-4 md:space-y-0 p-4 md:p-0 shadow-md md:shadow-none z-40`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 text-center">
          <li className="navbar-buttons">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="cursor-pointer hover:text-white hover:bg-blue-600 py-2 px-4 rounded transition"
            >
              About
            </ScrollLink>
          </li>
          <li className="navbar-buttons">
            <ScrollLink
              to="event"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="cursor-pointer hover:text-white hover:bg-blue-600 py-2 px-4 rounded transition"
            >
              Events
            </ScrollLink>
          </li>
          <li className="navbar-buttons">
            <ScrollLink
              to="branchchapters"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="cursor-pointer hover:text-white hover:bg-blue-600 py-2 px-4 rounded transition"
            >
              Branch Chapters
            </ScrollLink>
          </li>
          <li className="navbar-buttons">
            <ScrollLink
              to="membership"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="cursor-pointer hover:text-white hover:bg-blue-600 py-2 px-4 rounded transition"
            >
              Membership
            </ScrollLink>
          </li>
          <li className="navbar-buttons">
            <ScrollLink
              to="contactus"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="cursor-pointer hover:text-white hover:bg-blue-600 py-2 px-4 rounded transition"
            >
              Contact Us
            </ScrollLink>
          </li>
          <li className="navbar-buttons">
            <Link href="/our-team" className="hover:text-white hover:bg-blue-600 py-2 px-4 rounded transition">
              Our Team
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
