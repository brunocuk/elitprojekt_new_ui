import { useState } from "react";
import { motion } from "framer-motion";
import DiagonalUpArrow from "../assets/icons/diagonalUpArrow";
import { Link } from "react-router-dom";

const MainButton = ({ to, text }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link to={to}>
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border-2 dark:border-textColorDark border-darkBackground rounded-[12px] flex items-center justify-between w-[230px] h-[64px] relative"
    >
      <h3 className="text-[24px] dark:text-textColorDark text-darkBackground font-bold px-4">{text}</h3>
      <motion.div
        initial={{ width: 60 }}
        animate={hover ? { width: 226 } : { width: 60 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="bg-ctaColorDark p-4 rounded-[10px] h-[60px] flex items-center justify-center absolute top-0 right-0"
      >
        <DiagonalUpArrow />
      </motion.div>
    </motion.div>
    </Link>
  );
};

export default MainButton;
