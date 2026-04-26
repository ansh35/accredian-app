import { steps } from "../data/how-it-works";

export default function HowItWorksSection() {
  return (
    <section id="howItWorks" className="mt-12 sm:mt-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            How We{" "}
            <span className="text-blue-600">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3 mx-1">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">
              Skill Development
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full"
              >
                {/* Side bars */}
                <div className="absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-blue-600 rounded-lg"></div>

                <div className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-blue-600 rounded-lg"></div>

                {/* Step Number */}
                <div className="absolute left-2.5 top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full flex justify-center items-center text-sm sm:font-bold">
                  {step.no}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md">
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>

                {/* Title */}
                <h3 className="text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}