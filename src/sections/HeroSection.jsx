import { motion } from "framer-motion";
import trogir from "../assets/images/trogirCentar.webp";
import borovje from "../assets/images/borovjeKompleks.jpeg";
import { Link } from "react-router-dom";

const HeroSection = ({ content }) => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  // Header content animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  // Card image animation variants
  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  // Card title animation variants  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.main 
      className="flex flex-col items-center justify-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header section with title and subtitle */}
      <motion.div 
        className="flex flex-col lg:flex-row items-start lg:items-end justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full pt-32 sm:pt-32 md:pt-32 lg:pt-32 pb-8 lg:pb-12 gap-6 lg:gap-0"
        variants={headerVariants}
      >
        <motion.h1 
          className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] max-w-full lg:max-w-[900px] font-medium text-pretty leading-none order-1"
          variants={headerVariants}
        >
          {content?.heroTitle}
        </motion.h1>
        <motion.p 
          className="text-sm sm:text-base max-w-full lg:max-w-[435px] text-light-gray order-2 lg:order-2"
          variants={headerVariants}
        >
          {content?.heroSubtitle}
        </motion.p>
      </motion.div>
      
      {/* Image cards section */}
      <motion.div 
        className="flex flex-col lg:flex-row items-start justify-between w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-4 sm:gap-6 lg:gap-8 pb-8 sm:pb-12 lg:pb-16"
        variants={containerVariants}
      >
        {/* Trogir card */}
        <Link to={`in-plan/trogir-centar`}>
        <motion.div 
          className="group relative flex flex-col items-end justify-end overflow-hidden rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          variants={cardVariants}
          whileHover={{ 
            y: -8, 
            transition: { duration: 0.3, ease: "easeOut" } 
          }}
        >
          <motion.img
            src={trogir}
            alt="Trogir - Centar"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            variants={imageVariants}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent p-4 sm:p-6 lg:p-8 flex flex-col justify-end h-full">
            <Link to={`/in-plan/trogir-centar`}>
            <motion.h3 
              className="text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] max-w-[800px] leading-tight"
              variants={titleVariants}
            >
              Trogir - Centar
            </motion.h3>
            </Link>
          </div>
        </motion.div>
        </Link>

        {/* Borovje card */}
        <Link to={`/in-plan/borovje-kompleks`}>
        <motion.div 
          className="group relative flex flex-col items-end justify-end overflow-hidden rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          variants={cardVariants}
          whileHover={{ 
            y: -8, 
            transition: { duration: 0.3, ease: "easeOut" } 
          }}
        >
          <motion.img
            src={borovje}
            alt="Borovje Kompleks"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            variants={imageVariants}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent p-4 sm:p-6 lg:p-8 flex flex-col justify-end h-full">
          <Link to={`/in-plan/borovje-kompleks`}>
            <motion.h3 
              className="text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] max-w-[800px] leading-tight"
              variants={titleVariants}
            >
              Borovje Kompleks
            </motion.h3>
            </Link>
          </div>
        </motion.div>
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default HeroSection;