"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../features/components/mobile-menu";
import Navbar from "@/features/components/nav-bar";
import HeroSection from "@/features/components/hero-section";
import Stats from "@/features/components/stats";
import ClientsSection from "@/features/components/client-section";
import AccredianEdgeSection from "@/features/components/accredian-edge-section";
import DomainExpertiseSection from "@/features/components/domain-expertise-section";
import CourseSegmentationSection from "@/features/components/course-segmentaion-section";
import WhoShouldJoinSection from "@/features/components/who-should-join-section";
import CatFrameworkSection from "@/features/components/cat-framework";
import HowItWorksSection from "@/features/components/how-it-works";
import FAQSection from "@/features/components/faqs-section";
import Testimonials from "@/features/components/testimonials";
import SupportSection from "@/features/components/support-section";
import FooterSection from "@/features/components/footer-section"
/*
PUT THIS FILE IN:

app/page.tsx

ALSO ADD next.config.js:

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
*/

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const navItems = [
    "Home",
    "Stats",
    "Clients",
    "AccredianEdge",
    "Cat",
    "How It Works",
    "FAQs",
    "Testimonials",
  ];

  const logos = [
    "rel.png",
    "hcl.png",
    "ibm.png",
    "crif.png",
    "adp.svg",
    "bayer.svg",
  ];

  const testimonials = [
    {
      logo: "adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey.",
    },
    {
      logo: "bayer.svg",
      text: "Accredian's commitment to excellence is unmatched.",
    },
    {
      logo: "rel.png",
      text: "Choosing Accredian for employee learning & development was a beneficial decision.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden text-gray-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      <div className="sm:px-16 px-0 flex justify-center items-start">
        <div className="max-w-340 w-full">
          <Stats />
          <ClientsSection />
          <AccredianEdgeSection />
          <DomainExpertiseSection />
          <CourseSegmentationSection />
          <WhoShouldJoinSection />
          <CatFrameworkSection />
          <HowItWorksSection />
          <FAQSection />
          <Testimonials />
          <SupportSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
}