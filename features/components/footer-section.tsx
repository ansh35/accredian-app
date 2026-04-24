import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function FooterSection() {
  const socials = [
    {
      icon: <FacebookIcon />,
      href: "https://facebook.com/accredianlearn",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/company/accredianedu/",
    },
    {
      icon: <TwitterIcon />,
      href: "https://twitter.com/accredianedu",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/accredian_edu",
    },
    {
      icon: <YouTubeIcon />,
      href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
    },
  ];

  const links = [
    {
      label: "About",
      href: "https://accredian.com/About",
    },
    {
      label: "Blog",
      href: "https://blog.accredian.com/",
    },
    {
      label: "Why Accredian",
      href: "https://accredian.com/whyaccredian",
    },
  ];

  return (
    <footer className="mt-12 bg-[#1d1d1d] sm:bg-white sm:mt-24 py-10">
      <div className="max-w-[85rem] w-full px-[22px] sm:px-0 mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6">
          {/* Logo + Social */}
          <div>
            {/* Desktop Logo */}
            <Image
              src="/logo.webp"
              alt="Accredian Logo"
              width={144}
              height={48}
              className="hidden sm:block"
            />

            {/* Mobile Logo */}
            <Image
              src="/accredainnew.webp"
              alt="Accredian Logo"
              width={144}
              height={48}
              className="block sm:hidden"
            />

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="sm:text-gray-700 text-white hover:text-blue-600 transition"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 justify-center md:mt-0">
            <button className="p-2 sm:px-6 sm:py-2 bg-blue-600 text-sm sm:text-lg text-white rounded-lg hover:bg-blue-700 transition">
              Enquire Now
            </button>

            <p className="text-white sm:text-gray-700 text-sm mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 pb-6 gap-8 mt-6 border-b border-gray-700">
          {/* Links */}
          <div>
            <h3 className="font-normal sm:font-semibold text-lg text-white sm:text-black">
              Accredian
            </h3>

            <ul className="mt-2 text-white sm:text-gray-700 space-y-2">
              {links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600"
                    target="_blank"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-normal sm:font-semibold text-lg text-white sm:text-black">
              Contact Us
            </h3>

            <p className="text-gray-200 sm:text-gray-700 mt-2">
              Email us:{" "}
              <Link
                href="mailto:enterprise@accredian.com"
                className="text-blue-600"
              >
                enterprise@accredian.com
              </Link>
            </p>

            <p className="text-white sm:text-gray-700 mt-2 max-w-lg">
              Office Address: 4th Floor, 250, Phase IV, Udyog
              Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center items-center pt-3 text-center">
          <p className="text-white sm:text-gray-700">
            © 2026 Accredian A Brand of FullStack Education
            Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}