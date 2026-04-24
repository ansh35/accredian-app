"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Stats", href: "#stats" },
    { name: "Clients", href: "#clients" },
    { name: "Accredian Edge", href: "#accredianEdge" },
    { name: "CAT", href: "#cat" },
    { name: "How It Works", href: "#howItWorks" },
    { name: "FAQs", href: "#faqs" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
          <div className="max-w-[85rem] mx-auto flex justify-between items-center relative">
            {/* Logo */}
            <Image
              src="/logo.webp"
              alt="logo"
              width={124}
              height={32}
              priority
            />

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-end items-center flex-1 space-x-8 ml-10">
              {navLinks.map((item, index) => (
                <li
                  key={item.name}
                  className={`text-[16px] cursor-pointer ${
                    index === 0
                      ? "text-blue-600 font-semibold border-b-[3px] border-blue-600"
                      : "text-black"
                  }`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-black cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
              <div className="absolute top-[70px] right-0 bg-white shadow-lg p-6 rounded-xl w-64 md:hidden">
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`text-[16px] ${
                          index === 0
                            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                            : "text-black"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}