import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "../routes/routes";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", href: ROUTES.HOME },
  { title: "About Us", href: ROUTES.ABOUT_US },
  { title: "Work", href: ROUTES.WORK },
  { title: "Services", href: ROUTES.SERVICES },
  { title: "Contact", href: ROUTES.CONTACT },
  { title: "Blog", href: ROUTES.BLOG },
];

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const NavMenu = ({ setOpen, toggle }) => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "0" }}
      exit={{ y: "100vh" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{ zIndex: 9999 }}
      className="menu-box h-[80%] w-full fixed bottom-0 rounded-t-[70px]"
    >
      <div className="flex h-full flex-col md:px-44 px-8">
        <div className="flex justify-start"></div>
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col h-full md:justify-center justify-start md:pt-0 pt-16 items-start gap-4 "
        >
          {navLinks.map((link, index) => {
            return (
              <div className="overflow-hidden">
                <motion.div
                  key={index}
                  variants={mobileLinkVars}
                  className="dark:text-textColorDark text-darkBackground font-bold"
                >
                  <Link className="nav-button md:text-8xl text-[40px]" onClick={() => setOpen(false)} to={link.href}>{link.title}</Link>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavMenu;
