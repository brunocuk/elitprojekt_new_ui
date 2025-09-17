import { Link } from "react-router-dom";
import LogoFooter from "../assets/logo/DiPlanLogo";
import { ROUTES } from "../config/routes";
import { useLocale } from "../config/localeContext";
import whereWeWork from "../assets/images/whereWeOperate.png"

const Footer = ({ show }) => {
  const locale = useLocale();

  const menuItems = [
    { key: "home", route: ROUTES.HOME },
    { key: "properties", route: ROUTES.PROPERTIES },
    { key: "projects", route: ROUTES.PROJECTS },
    { key: "about", route: ROUTES.ABOUT_US },
  ];

  const menuLabels = {
    "hr-HR": {
      menu: "Menu",
      home: "Home", 
      properties: "Properties",
      projects: "Our Projects",
      about: "About Us",
      contact: "Contact",
      contactUs: "Contact Us",
      bookCall: "Book a call",
      socialMedia: "Social Media",
    },
    en: {
      menu: "Menu",
      home: "Home",
      properties: "Properties", 
      projects: "Our Projects",
      about: "About Us",
      contact: "Contact",
      contactUs: "Contact Us",
      bookCall: "Book a call",
      socialMedia: "Social Media",
    },
  };

  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1400px] w-full drop-shadow-xl">
        {/* Footer content */}
        <div className="bg-card-bg rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[80px]">
          {/* Top section with columns */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
              
              {/* Logo */}
              <div className="sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-start">
                <LogoFooter 
                  color={"black"} 
                  width={120} 
                  height={38}
                  className="sm:w-[140px] sm:h-[44px] lg:w-[160px] lg:h-[50px]"
                />
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <h3 className="text-black font-bold text-base sm:text-lg">
                  {menuLabels[locale.locale]?.menu || "Menu"}
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3">
                  {menuItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.route}
                      className="text-black/70 hover:text-black font-medium transition-colors text-sm sm:text-base"
                    >
                      {menuLabels[locale.locale]?.[item.key] || item.key}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <h3 className="text-black font-bold text-base sm:text-lg">
                  {menuLabels[locale.locale]?.contact || "Contact"}
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <a 
                    href="#" 
                    className="text-black/70 hover:text-black font-medium transition-colors text-sm sm:text-base"
                  >
                    {menuLabels[locale.locale]?.contactUs || "Contact Us"}
                  </a>
                  <a 
                    href="#" 
                    className="text-black/70 hover:text-black font-medium transition-colors text-sm sm:text-base"
                  >
                    {menuLabels[locale.locale]?.bookCall || "Book a call"}
                  </a>
                  <a 
                    href="mailto:info@elitprojekt.com" 
                    className="text-black/70 hover:text-black font-medium transition-colors text-sm sm:text-base break-all sm:break-normal"
                  >
                    info@elitprojekt.com
                  </a>
                  <a 
                    href="tel:+385913789654" 
                    className="text-black/70 hover:text-black font-medium transition-colors text-sm sm:text-base"
                  >
                    +385 99 4339 499
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <h3 className="text-black font-bold text-base sm:text-lg">
                  {menuLabels[locale.locale]?.socialMedia || "Social Media"}
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-black/70 hover:text-black font-medium transition-colors text-sm sm:text-base"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="sm:col-span-2 lg:col-span-1 flex justify-center">
                <div className="w-full max-w-[280px] sm:max-w-none h-32 sm:h-40 lg:h-48 rounded-lg overflow-hidden">
                  <img 
                    src={whereWeWork} 
                    alt="Where we work - Elit Projekt location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Big ELIT PROJEKT text */}
          <div className="overflow-hidden px-2">
            <h1 className="text-[60px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[180px] font-black text-black leading-none text-center select-none">
              ELIT PROJEKT
            </h1>
          </div>

          {/* Bottom section */}
          <div className="border-t border-black/10 px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <p className="text-black/60 text-xs sm:text-sm text-center sm:text-left">
                © 2025 ELIT PROJEKT D.O.O. ALL RIGHTS RESERVED
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
                <a href="#" className="text-black/60 hover:text-black text-xs sm:text-sm transition-colors">
                  COOKIES
                </a>
                <span className="text-black/40 hidden sm:inline">|</span>
                <a href="#" className="text-black/60 hover:text-black text-xs sm:text-sm transition-colors">
                  TERMS AND CONDITIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;