"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative flex items-center">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 text-black cursor-pointer"
        aria-label="Toggle Menu"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-15 right-0 bg-white shadow-lg p-6 rounded-xl min-w-55 z-50">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="#home"
                className="text-blue-600 font-semibold border-b-2 border-blue-600"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#stats"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                Stats
              </Link>
            </li>

            <li>
              <Link
                href="#clients"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                Clients
              </Link>
            </li>

            <li>
              <Link
                href="#accredianEdge"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                Accredian Edge
              </Link>
            </li>

            <li>
              <Link
                href="#cat"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                CAT
              </Link>
            </li>

            <li>
              <Link
                href="#howItWorks"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                href="#faqs"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                FAQs
              </Link>
            </li>

            <li>
              <Link
                href="#testimonials"
                className="text-black"
                onClick={() => setOpen(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}