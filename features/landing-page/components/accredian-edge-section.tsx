import Image from "next/image";

export default function AccredianEdgeSection() {
  return (
    <section
      id="accredianEdge"
      className="mt-12 px-4 md:px-8 xl:px-12"
    >
      {/* Heading */}
      <div className="text-center pb-8 mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3 mx-1">
          Key Aspects of{" "}
          <span className="text-blue-600">
            Our Strategic Training
          </span>
        </p>
      </div>

      {/* Desktop Image */}
      <div className="w-full hidden sm:flex justify-center items-center mb-8">
        <Image
          src="/accredian-edge-usp-v3.svg"
          alt="Our Solutions"
          width={1400}
          height={700}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="flex sm:hidden w-full justify-center items-center mb-8">
        <Image
          src="/accredian-edge-usp-mobile.svg"
          alt="Our Solutions"
          width={500}
          height={900}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
    </section>
  );
}