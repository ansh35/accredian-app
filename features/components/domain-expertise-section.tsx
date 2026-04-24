import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Landmark,
} from "lucide-react";

export default function DomainExpertiseSection() {
  const expertise = [
    { title: "Product & Innovation Hub", icon: Lightbulb },
    { title: "Gen-AI Mastery", icon: Brain },
    { title: "Leadership Elevation", icon: Users },
    { title: "Tech & Data Insights", icon: BarChart3 },
    { title: "Operations Excellence", icon: Settings },
    { title: "Digital Enterprise", icon: Globe },
    { title: "Fintech Innovation Lab", icon: Landmark },
  ];

  return (
    <section className="mt-12 sm:mt-24 mb-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3 mx-1">
            <span className="text-blue-600">Specialized Programs</span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg"
              >
                <Icon className="text-blue-600 font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />

                <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}