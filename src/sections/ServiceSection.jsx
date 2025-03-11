import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const [service, setService] = useState("webDev");
  const [activeImage, setActiveImage] = useState("");

  // Image URLs
  const images = {
    webDev:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    eCom: "https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    custom:
      "https://images.unsplash.com/photo-1613575998061-0f59337425f2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "https://images.unsplash.com/photo-1581609784724-68d753c36494?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  useEffect(() => {
    setActiveImage(images[service]);
  }, [service]);

  return (
    <div className="flex flex-col md:px-24 lg:px-32 xl:px-44 px-4 items-start justify-start dark:bg-darkBackground bg-textColorDark overflow-hidden pt-32">
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="font-bold tracking-wide md:text-[54px] text-[34px] dark:text-textColorDark text-darkBackground max-w-[518px]">
            How We Can Assist Our Clients
          </h2>
          <p className="satoshi font-normal md:text-[19px] text-[16px] max-w-[522px] dark:text-textColorDark text-darkBackground">
            With our range of services we can assist our clients in reaching
            their needs.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start justify-start">
          <motion.div
            onMouseEnter={() => setService("webDev")}
            className="py-12 border-b-2 border-textColorDark flex flex-col items-start justify-start w-full pr-12"
          >
            <h6 className="dark:text-textColorDark text-darkBackground font-bold text-[34px] tracking-wide">
              01 Web Development
            </h6>
            <p className="satoshi font-normal text-[17px] max-w-[522px] dark:text-textColorDark text-darkBackground">
              Creating powerful, responsive websites that capture your brand and
              engage users. From design to deployment, we ensure a seamless
              experience across all devices.
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setService("eCom")}
            className="py-12 border-b-2 border-textColorDark flex flex-col items-start justify-start w-full pr-12"
          >
            <h6 className="dark:text-textColorDark text-darkBackground font-bold text-[34px] tracking-wide">
              02 E-commerce Development
            </h6>
            <p className="satoshi font-normal text-[17px] max-w-[522px] dark:text-textColorDark text-darkBackground">
              Building secure, scalable e-commerce solutions designed to
              convert. We help you create an online store that's easy to manage,
              fast to load, and tailored for growth.
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setService("custom")}
            className="py-12 border-b-2 border-textColorDark flex flex-col items-start justify-start w-full pr-12"
          >
            <h6 className="dark:text-textColorDark text-darkBackground font-bold text-[34px] tracking-wide">
              03 Custom Software
            </h6>
            <p className="satoshi font-normal text-[17px] max-w-[522px] dark:text-textColorDark text-darkBackground">
              Delivering custom software solutions built to meet your unique
              business needs. Our applications improve productivity, streamline
              operations, and drive success.
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setService("content")}
            className="py-12 border-b-2 border-textColorDark flex flex-col items-start justify-start w-full pr-12"
          >
            <h6 className="dark:text-textColorDark text-darkBackground font-bold text-[34px] tracking-wide">
              04 SEO
            </h6>
            <p className="satoshi font-normal text-[17px] max-w-[522px] dark:text-textColorDark text-darkBackground">
              Boost your online presence with our effective SEO strategies that
              drive traffic and improve search rankings. We optimize your site
              for long-term visibility and growth.
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setService("content")}
            className="py-12"
          >
            <h6 className="dark:text-textColorDark text-darkBackground font-bold text-[34px] tracking-wide">
              05 Content Creation
            </h6>
            <p className="satoshi font-normal text-[17px] max-w-[522px] dark:text-textColorDark text-darkBackground">
              Without great content, your website can't stand out. We produce
              compelling, original content that connects with your audience,
              building a brand that truly resonates.
            </p>
          </motion.div>
        </div>
        <div className="md:block hidden">
          <motion.img
            className="h-[800px] w-[650px] object-cover rounded-[12px]"
            src={activeImage}
            key={activeImage}
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
