import { Logo } from "../assets/icons";
import { ROUTES } from "../routes/routes";
import MainButton from "./MainButton";
import Dribbble from "../assets/icons/Dribbble"
import Instagram from "../assets/icons/Instagram"
import LinkedIn from "../assets/icons/LinkedIn"
import Tiktok from "../assets/icons/Tiktok"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:px-24 lg:px-32 xl:px-44 px-4 dark:bg-darkBackground bg-textColorDark overflow-hidden">
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full py-32">
        <div>
          <h2 className="font-bold tracking-wide md:text-[69px] text-[49px] max-w-[849px] dark:text-textColorDark text-darkBackground leading-tight">
            Let's Build Something Amazing Together.
          </h2>
          <p className="satoshi font-normal md:text-[19px] text-[16px] max-w-[677px] dark:text-textColorDark text-darkBackground pt-4">
            Our goal is to shift you from today's reality to tomorrow's
            potential, ensuring your success.
          </p>
        </div>
        <div className="md:pt-0 pt-12">
        <MainButton to={ROUTES.CONTACT} text={"Let's Talk"} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full pb-24">
        <div className="flex flex-col items-start justify-start gap-11">
          <Logo />
          <p className="satoshi font-normal text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
            If you ask our clients what it's like working with talk how much we
            care about their success. Relationships fuel real success. We love
            building brands.
          </p>
          <div className="flex items-center justify-start gap-12 w-full">
            <Dribbble />
            <Instagram />
            <LinkedIn />
            <Tiktok />
          </div>
          {/* <div className="flex items-center justify-start gap-12 w-full">
            <Dribbble />
            <Instagram />
            <LinkedIn />
            <Tiktok />
          </div> */}
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-[35px] font-bold dark:text-textColorDark text-darkBackground">Quick Links</h2>
          <Link to={ROUTES.HOME} className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
            Home
          </Link>
          <Link to={ROUTES.ABOUT_US} className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
            About Us
          </Link>
          <Link to={ROUTES.WORK} className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
            Work
          </Link>
          <Link to={ROUTES.BLOG} className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
            Blog
          </Link>
          <Link to={ROUTES.CONTACT} className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-[35px] font-bold dark:text-textColorDark text-darkBackground">Contact Us</h2>
          <p className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
          Slavonska avenija 1c, Zagreb 10000 Hrvatska
          </p>
          <p className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
          +385 91 3333 447
          </p>
          <Link to="mailto:hello@progmatiq.co" className="satoshi font-semibold text-[19px] max-w-[466px] dark:text-textColorDark text-darkBackground">
          hello@progmatiq.co
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between w-full pb-4">
        <p className="satoshi font-semibold text-[13px] dark:text-textColorDark text-darkBackground">© 2024 Progmatiq. All rights reserved</p>
        <p className="satoshi font-semibold text-[13px] dark:text-textColorDark text-darkBackground">Cookies Policy</p>
      </div>
    </div>
  );
};

export default Footer;
