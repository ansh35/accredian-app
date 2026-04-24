import Image from "next/image";

export default function CatFrameworkSection() {
  return (
    <section
      id="cat"
      className="w-full mt-12 sm:mt-24 py-4 flex flex-col items-center second-bg-grad"
    >
      {/* Heading */}
      <div className="text-center mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Our Proven Approach to{" "}
          <span className="text-blue-600">
            Learning Excellence
          </span>
        </p>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center mt-16">
        <Image
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
          alt="Our Solutions"
          width={1100}
          height={700}
          className="w-[90%] sm:w-[70%] h-auto rounded-lg"
          priority
        />
      </div>
    </section>
  );
}