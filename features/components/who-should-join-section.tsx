import Image from "next/image";
import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function WhoShouldJoinSection() {
  const users = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: MonitorCheck,
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: MonitorX,
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: GraduationCap,
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10 bg-blue-600 sm:rounded-lg flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2 pt-12 md:pl-6 text-white flex flex-col justify-between">
        <div>
          <h4 className="text-lg sm:text-xl font-medium">
            Who Should Join?
          </h4>

          <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
            Strategic Skill Enhancement
          </h1>
        </div>

        <div className="w-[300px] justify-center hidden md:block">
          <Image
            src="/imagehuman.png"
            alt="Human Illustration"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-12 text-white gap-10 md:w-1/2">
        {users.map((user, index) => {
          const Icon = user.icon;

          return (
            <div
              key={index}
              className="flex gap-4 sm:gap-2 flex-row sm:flex-col"
            >
              <Icon className="w-10 h-10 sm:w-14 sm:h-14 mb-2" />

              <div>
                <h2 className="text-[16px] sm:text-[22px] font-semibold">
                  {user.title}
                </h2>

                <p className="text-sm sm:text-md text-gray-200">
                  {user.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}