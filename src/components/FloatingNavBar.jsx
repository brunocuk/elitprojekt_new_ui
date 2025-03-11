import { Link } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import { ROUTES } from "../routes/routes";
import { Icon } from "../assets/icons";
import { motion } from "framer-motion";

const FloatingNavBar = ({ isOpen, setOpen}) => {
  return (
    <motion.div
      initial={{ y: "-30vh" }}
      animate={{ y: "0" }}
      exit={{ y: "-30vh" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="py-4 z-50 flex items-center justify-between header-box sm:max-w-[900px] max-w-[400px] w-full px-12 fixed top-4"
    >
      <Link to={ROUTES.HOME}>
        <Icon />
      </Link>
      <div className="flex gap-12 items-center justify-end">
        <Link to={ROUTES.WORK} className="nav-button sm:flex hidden dark:text-textColorDark text-darkBackground">
          Work
        </Link>
        <Link to={ROUTES.CONTACT} className="nav-button sm:flex hidden dark:text-textColorDark text-darkBackground">
          Contact
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" color="#FFFFFF" size={30} />
      </div>
    </motion.div>
  );
};

export default FloatingNavBar;
