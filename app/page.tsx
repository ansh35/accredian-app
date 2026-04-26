"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../features/landing-page/components/mobile-menu";
import Navbar from "@/features/landing-page/components/nav-bar";
import HeroSection from "@/features/landing-page/components/hero-section";
import Stats from "@/features/landing-page/components/stats";
import ClientsSection from "@/features/landing-page/components/client-section";
import AccredianEdgeSection from "@/features/landing-page/components/accredian-edge-section";
import DomainExpertiseSection from "@/features/landing-page/components/domain-expertise-section";
import CourseSegmentationSection from "@/features/landing-page/components/course-segmentaion-section";
import WhoShouldJoinSection from "@/features/landing-page/components/who-should-join-section";
import CatFrameworkSection from "@/features/landing-page/components/cat-framework";
import HowItWorksSection from "@/features/landing-page/components/how-it-works";
import FAQSection from "@/features/landing-page/components/faqs-section";
import Testimonials from "@/features/landing-page/components/testimonials";
import SupportSection from "@/features/landing-page/components/support-section";
import FooterSection from "@/features/landing-page/components/footer-section"

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