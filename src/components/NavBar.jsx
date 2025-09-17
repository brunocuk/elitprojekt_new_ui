import { useState } from "react";
import DiPlanLogo from "../assets/logo/DiPlanLogo";
import { ROUTES } from "../config/routes";
import { Link, NavLink } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../config/localeContext";
import LocaleSwitcher from "./LocaleSwitcher";
import { useMatch } from "react-router-dom";

const NavBar = ({ scrollY, isOpen, setOpen, location }) => {
  const locale = useLocale();

  return (
    <header
      style={{ zIndex: 999 }}
      className="fixed w-full flex justify-center px-4 lg:px-16 bg-white"
    >
      <motion.nav
        className={`flex items-center justify-between w-full py-3`}
      >

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-10 font-medium text-sm">
          <NavLink 
            to={ROUTES.HOME}
            className={({ isActive }) => 
              isActive 
                ? "text-dark-text font-medium text-md transition-colors duration-200" 
                : "text-light-gray font-normal text-md hover:text-dark-text transition-colors duration-200"
            }
          >
            {locale.locale === "hr-HR" && "Naslovna"}
            {locale.locale === "en" && "Home"}
          </NavLink>

          <NavLink 
            to={ROUTES.IN_CONSTRUCTION}
            className={({ isActive }) => 
              isActive 
                ? "text-dark-text font-medium text-md transition-colors duration-200" 
                : "text-light-gray font-normal text-md hover:text-dark-text transition-colors duration-200"
            }
          >
            {locale.locale === "hr-HR" && "U izgradnji"}
            {locale.locale === "en" && "In Construction"}
          </NavLink>

          <NavLink 
            to={ROUTES.IN_PLAN}
            className={({ isActive }) => 
              isActive 
                ? "text-dark-text font-medium text-md transition-colors duration-200" 
                : "text-light-gray font-normal text-md hover:text-dark-text transition-colors duration-200"
            }
          >
            {locale.locale === "hr-HR" && "U Planu"}
            {locale.locale === "en" && "In Plan"}
          </NavLink>
          
          <NavLink 
            to={ROUTES.ABOUT_US}
            className={({ isActive }) => 
              isActive 
                ? "text-dark-text font-medium text-md transition-colors duration-200" 
                : "text-light-gray font-normal text-md hover:text-dark-text transition-colors duration-200"
            }
          >
            {locale.locale === "hr-HR" && "O nama"}
            {locale.locale === "en" && "About us"}
          </NavLink>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link to={ROUTES.HOME}>
            <DiPlanLogo width={152} height={48} color="black" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <LocaleSwitcher />
          
          <NavLink 
            to={ROUTES.CONTACT}
            className={({ isActive }) => 
              isActive 
                ? "text-dark-text font-medium transition-colors duration-200 hidden lg:flex" 
                : "text-light-gray font-normal hover:text-dark-text transition-colors duration-200 hidden lg:flex"
            }
          >
            {locale.locale === "hr-HR" && "Kontakt"}
            {locale.locale === "en" && "Contact"}
            {locale.locale === "de-DE" && "Kontakt"}
          </NavLink>
          
          <Link to={ROUTES.CONTACT}>
            <button
              className={`bg-white hover:bg-black text-text-dark-text hover:text-white px-6 py-4 font-medium xl:flex hidden hover:bg-gray-800 transition-colors duration-200`}
            >
              {locale.locale === "hr-HR" && "Započni svoj projekt"}
              {locale.locale === "en" && "Start your project"}
              {locale.locale === "de-DE" && "Starte dein Projekt"}
            </button>
          </Link>
          
          {/* Mobile Hamburger */}
          <div className="lg:hidden flex">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              color={"#000000"}
            />
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar