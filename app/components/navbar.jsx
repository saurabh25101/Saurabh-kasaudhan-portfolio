 // @flow strict
'use client';

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent w-full  top-0 left-0 z-50">
      <div className="flex items-center justify-between py-5  md:px-10 relative">
        {/* Logo / Name */}
        <div className="flex items-center z-50">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Saurabh Kasaudhan
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-40" onClick={toggleMenu}></div>
        )}

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-6 text-sm md:items-center fixed md:static top-16 left-0 w-full md:w-auto bg-[#0f1123] md:bg-transparent transition-all duration-300 ease-in-out z-50 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {["about","experience","skills","education","projects"].map((section) => (
            <li key={section}>
              <Link
                href={`/#${section}`}
                className="block px-4 py-4 text-white text-lg hover:text-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
