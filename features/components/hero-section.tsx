import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function HeroSection() {
  const features = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance",
    "Measurable Impact",
  ];

  return (
    <div className="flex justify-center items-start">
      <div className="max-w-340 w-full">
        <section
          id="home"
          className="flex justify-center items-center my-4 mt-20 sm:mt-32 xl:px-12 sm:px-4 mb-10 md:mb-0"
        >
          <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-4 md:gap-8 lg:gap-12 shadow-lg overflow-visible w-full">

            {/* Left Content */}
            <div className="sm:w-1/2 w-full sm:ml-7 flex flex-col justify-between gap-4 md:gap-8 lg:gap-10 md:ps-2 lg:ps-8">

              <h1 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-6xl font-bold max-w-full sm:max-w-[350px] lg:max-w-[700px] pt-2 capitalize px-8 sm:px-0">
                Next-Gen{" "}
                <span className="text-blue-600">Expertise</span> for Your{" "}
                <span className="text-blue-600">Enterprise</span>
              </h1>

              <p className="font-medium md:font-normal text-sm sm:text-lg lg:text-2xl text-gray-700 max-w-full p-2 sm:p-0 w-full sm:max-w-[350px] text-center sm:text-left">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Features */}
              <ul className="grid grid-cols-2 mx-auto sm:flex sm:mx-0 sm:flex-wrap gap-4">
                {features.map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 mb-2 ${
                      index === 3 ? "sm:hidden" : ""
                    }`}
                  >
                    <CircleCheck className="w-6 h-6 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="flex mb-6 sm:mb-0 justify-center sm:justify-start">
                <button className="w-[80%] sm:w-[170px] p-[7px] text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
                  <p className="text-sm md:text-xl">Enquire Now</p>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex w-full sm:w-1/2 sm:justify-end sm:items-end justify-center">
              <Image
                src="/corporate-big-hero-v4.webp"
                alt="headerImage"
                width={700}
                height={500}
                className="sm:w-full sm:h-full h-[80%] w-[80%]"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}