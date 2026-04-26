"use client";

import { useState } from "react";
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
import EnquiryModal from "@/features/landing-page/components/contact-us-form";
import SupportSection from "@/features/landing-page/components/support-section";
import FooterSection from "@/features/landing-page/components/footer-section"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="w-full overflow-x-hidden text-gray-900">
      <Navbar />

      <HeroSection onEnquire={openModal} />

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
          <SupportSection onEnquire={openModal} />
          <FooterSection onEnquire={openModal} />
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}