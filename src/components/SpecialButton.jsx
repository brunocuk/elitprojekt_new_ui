import { Link } from "react-router-dom";
import DiagonalUpArrow from "../assets/icons/diagonalUpArrow";
import Icon from "../assets/icons/Icon";
import { motion } from "framer-motion";

const SpecialButton = ({ to }) => {
  return (
    <Link to={to}>
      <div className="flex">
        <motion.div
          whileHover={{ width: 130 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="z-10 bg-lightGray rounded-[12px] w-[65px] h-[65px] flex items-center justify-center"
        >
          <DiagonalUpArrow />
        </motion.div>
        <motion.div className="border-2 border-lightGray rounded-[12px] w-[65px] h-[65px] flex items-center justify-center">
          <Icon />
        </motion.div>
        <div className="ml-4">
          <h2 className="dark:text-textColorDark text-darkBackground satoshi font-semibold md:text-[24px] text-[20px]">
            Book a free consultation
          </h2>
          <p className="dark:text-textColorDark text-darkBackground satoshi font-light md:text-[19px] text-[16px]">
            Start building a fast, scalable web app today!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SpecialButton;
