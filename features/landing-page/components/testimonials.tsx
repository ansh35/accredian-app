"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      logo: "adp.svg",
      alt: "ADP",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "bayer.svg",
      alt: "Bayer",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      logo: "rel.png",
      alt: "Reliance",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full mt-16 sm:mt-20 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Testimonials from{" "}
          <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </div>

      {/* Slider */}
      <div className="w-full px-4 max-w-7xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          loop={false}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="!pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-300 rounded-xl p-6 min-h-[250px] h-full">
                <div className="flex flex-col items-start h-full">
                  {/* Logo */}
                  <div className="h-16 mb-4 flex items-center">
                    <Image
                      src={`/${item.logo}`}
                      alt={item.alt}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <p className="text-neutral-600 text-base font-light leading-7">
                    "{item.text}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px;
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: #cbd5e1;
        }

        .swiper-pagination-bullet-active {
          background: #2563eb;
        }
      `}</style>
    </section>
  );
}