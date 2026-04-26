import Image from "next/image";
import { logos } from "../data/client";
export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="mt-8 sm:mt-28 xl:px-12 px-4 text-center"
    >
      {/* Heading */}
      <div className="text-center mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry’s Best</span>
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="w-full flex justify-center items-center mt-6">
        <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 xl:gap-12">
          {logos.map((logo) => (
            <li
              key={logo}
              className="flex justify-center items-center sm:p-4"
            >
              <Image
                src={`/${logo}`}
                alt="client"
                width={90}
                height={90}
                className="object-contain"
              />
            </li>
          ))}
        </ul>

        {/* Mobile Marquee */}
        <div className="sm:hidden overflow-hidden relative w-full">
          <div className="flex mt-4 whitespace-nowrap animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-8"
              >
                <Image
                  src={`/${logo}`}
                  alt="client"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}