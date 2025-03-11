import { Link } from "react-router-dom";
import { Logo } from "../assets/icons";
import { ROUTES } from "../routes/routes";
import { Spiral as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import FloatingNavBar from "./FloatingNavBar";
import { AnimatePresence } from "framer-motion";
import Light from "../assets/icons/Light"
import Dark from "../assets/icons/Dark"

const NavBar = ({isOpen, setOpen, toggle, theme}) => {
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  // Scroll event to toggle FloatingNavBar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="md:px-24 lg:px-32 xl:px-44 px-4 md:py-8 py-4 flex items-center justify-between mx-auto dark:dark:bg-darkBackground bg-textColorDark">
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
        <div className="flex gap-12 items-center justify-end">
          <button onClick={toggle}>{theme === 'light' ? <Dark /> : <Light />}</button>
          <Link to={ROUTES.WORK} className="nav-button sm:flex hidden dark:dark:text-textColorDark text-darkBackground">
            Work
          </Link>
          <Link to={ROUTES.CONTACT} className="nav-button sm:flex hidden dark:dark:text-textColorDark text-darkBackground">
            Contact
          </Link>
          <Hamburger toggled={isOpen} toggle={setOpen} direction="right" color={theme === 'light' ? "#050505" : "#FFFFFF"} size={30} />
        </div>
      </div>
      {/* Conditionally render FloatingNavBar */}
      <AnimatePresence>
      {showFloatingNav && (
        <div className="flex items-center justify-center dark:bg-darkBackground bg-textColorDark">
          <FloatingNavBar isOpen={isOpen} setOpen={setOpen} />
        </div>
      )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
