"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CourseSegmentationSection() {
  const courses = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      image: "/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "/senior-management-v2.webp",
    },
  ];

  return (
    <section className="mt-12 sm:mt-28 md:mx-16 mb-10 bg-white text-center">
      {/* Heading */}
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3 mx-1">
          Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      {/* MOBILE SWIPER */}
      <div className="block sm:hidden px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-14"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg w-full shadow-lg border border-gray-300">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={250}
                  className="w-full h-40 object-cover rounded-t-lg"
                />

                <h4 className="text-2xl font-semibold text-blue-600 p-6">
                  {course.title}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border border-gray-300"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={250}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />

            <h4 className="text-2xl font-semibold text-blue-600 px-6">
              {course.title}
            </h4>

            <p className="text-gray-600 mt-2 text-sm px-6 pb-6">
              {course.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}