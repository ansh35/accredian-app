import {
  Headphones,
  ChevronRight,
} from "lucide-react";

export default function SupportSection({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section
      id="supportSection"
      className="cta flex justify-center w-full mt-16 sm:mt-24 xl:px-12 px-4"
    >
      <div className="border border-blue-600 w-full max-w-340 py-8 md:py-16 md:px-12 px-6 bg-blue-600 rounded-xl flex items-center md:justify-between md:flex-row flex-col gap-6">

        {/* Left Content */}
        <div className="flex gap-8 md:flex-row flex-col md:items-start items-center">
          {/* Icon Box */}
          <div className="w-20 h-20 shrink-0 bg-slate-200/35 rounded-xl p-1">
            <div className="w-full h-full bg-white rounded-xl p-2">
              <Headphones className="w-full h-full text-blue-600" />
            </div>
          </div>

          {/* Text */}
          <div className="md:text-start text-center">
            <h2 className="text-xl md:text-3xl font-semibold text-white">
              Want to Learn More About Our Training Solutions?
            </h2>

            <p className="text-base hidden sm:block md:text-lg mt-2 max-w-xl font-medium text-neutral-100">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full max-w-50 py-2 sm:px-4 sm:py-3 mt-4 rounded-lg text-blue-600 bg-white text-xl font-semibold flex items-center justify-center gap-1 hover:bg-gray-100 transition" onClick={onEnquire}>
          Contact Us
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}