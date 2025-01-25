"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<string>("EDS");
  const [branchActive, setBranchActive] = useState<boolean>(false);

  const chapterDetails: Record<string, string> = {
    EDS: "Electron Devices Society: The EDS field-of-interest includes all electron and ion-based devices, in their classical or quantum states, using environments and materials in their lowest to highest conducting phase...",
    DSP: "Digital Signal Processing Society: The DSP Society focuses on digital signal processing, covering theory, design, and applications in various industries...",
    eCAD: "Electronic Computer-Aided Design Society: The eCAD Society advances electronic design automation and supports development in simulation, modeling, and verification...",
    Power: "Power Engineering Society: The Power Engineering Society addresses advancements in electrical energy systems, power transmission, and sustainable technologies...",
    Computer: "Computer Society: The Computer Society supports innovations in computing, programming, and hardware development...",
    Circuits: "Circuits and Systems Society: The Circuit and Systems Society emphasizes design, analysis, and simulation of electrical circuits...",
  };

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-2 [@media(min-width:1160px)]:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-12 h-12 [@media(min-width:1160px)]:w-16 [@media(min-width:1160px)]:h-16">
            <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <div className="lg:px-6 px-2">
            <h1 className="text-lg font-bold">IEEE Student Branch</h1>
            <h2 className="font-medium text-md">NIT Jamshedpur</h2>
          </div>
        </Link>
        <div
          className="[@media(min-width:1160px)]:hidden text-2xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
        </div>

        <div className="hidden [@media(min-width:1160px)]:flex justify-end space-x-4 font-semibold p-4 items-center">
          <Link href="#about" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            About
          </Link>
          <Link href="#events" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Events
          </Link>

          <div
            className="relative py-2 px-4 transition cursor-pointer hover:text-white hover:bg-[#166499]"
            onMouseEnter={() => setBranchActive(true)}
            onMouseLeave={() => setBranchActive(false)}
          >
            Branch Chapters

            {branchActive && (
              <div className="absolute top-[40px] -left-80 bg-white text-black shadow-lg w-[800px] flex z-10">

                <div className="w-1/3 bg-[#166499] text-white p-4">
                  <ul className="space-y-4">
                    {Object.keys(chapterDetails).map((chapterKey) => (
                      <li
                        key={chapterKey}
                        onMouseEnter={() => setActiveChapter(chapterKey)}
                        className={`hover:underline cursor-pointer font-medium text-sm ${
                          activeChapter === chapterKey ? "text-[#e2ebf5]" : ""
                        }`}
                      >
                        {">"} IEEE {chapterDetails[chapterKey].split(":")[0]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-2/3 p-4">
                  <p className="text-sm font-normal">{chapterDetails[activeChapter]}</p>
                  <p className="text-center text-md font-md mt-4">Label as ‘Coming Soon’</p>
                </div>
              </div>
            )}
          </div>

          <Link href="#membership" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Membership
          </Link>
          <Link href="#contactus" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Contact Us
          </Link>
          <Link href="/our-team" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Our Team
          </Link>
        </div>
      </div>

      {showMenu && (
        <div className="flex flex-col bg-[#e2ebf5] p-4 space-y-4 shadow-md [@media(min-width:1160px)]:hidden font-semibold">
          <Link href="#about" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            About
          </Link>
          <Link href="#events" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Events
          </Link>
          <Link
            href="#branchchapters"
            onClick={() => setBranchActive(!branchActive)}
            className={`py-2 px-4 transition ${branchActive ? "underline text-[#166499]" : ""}`}
          >
            Branch Chapters
          </Link>
          <Link href="#membership" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Membership
          </Link>
          <Link href="#contactus" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Contact Us
          </Link>
          <Link href="/our-team" className="hover:text-white hover:bg-[#166499] py-2 px-4 transition">
            Our Team
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
