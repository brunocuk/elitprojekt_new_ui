import { useState } from "react";
import gifOne from "../assets/gifs/hasbula-oondasta.gif";
import gifTwo from "../assets/gifs/jeremy-clarkson-speed.gif";
import gifThree from "../assets/gifs/michael-scott-the-office.gif";
import gifFour from "../assets/gifs/office-5k.gif";
import gifFive from "../assets/gifs/the-office-jog.gif";
import gifSix from "../assets/gifs/the-office-shatatata.gif";
import gifSeven from "../assets/gifs/theoffice-run.gif";
import gifEight from "../assets/gifs/jim-carrey-jim-carrey-typing.gif";
import { SpecialButton } from "../components";
import { ROUTES } from "../routes/routes";
import heroImage from "../assets/images/Subtract.png";
import roundCorner from "../assets/rounded.svg";
import roundBottom from "../assets/roundedBottom.svg";

const HeroSection = () => {
  const gifs = [
    gifOne,
    gifTwo,
    gifThree,
    gifFour,
    gifFive,
    gifSix,
    gifSeven,
    gifEight,
  ];

  const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
  const [showGif, setShowGif] = useState(false);
  const [currentGif, setCurrentGif] = useState(gifs[0]);

  const handleMouseMove = (e) => {
    setGifPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    // Select a random GIF from the array
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    setCurrentGif(randomGif);
    setShowGif(true);
  };

  const handleMouseLeave = () => {
    setShowGif(false);
  };

  return (
    <div className="dark:dark:bg-darkBackground bg-textColorDark md:px-24 lg:px-32 xl:px-44 px-4 md:pt-16 pt-6 flex flex-col overflow-hidden">
      <h1 className="dark:text-textColorDark text-darkBackground font-bold md:text-[79px] text-[40px] leading-tight tracking-wide">
        Building{" "}
        <span
          className="text-primary cursor-pointer relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          Lightning-Fast
        </span>
        , Custom Web Applications for Growing Businesses.
      </h1>
      <p className="satoshi font-normal md:text-[27px] text-[17px] max-w-[800px] dark:text-textColorDark text-darkBackground pt-4">
        We help you reduce load times, improve user experience, and scale
        effortlessly.
      </p>
      <div className="pt-12 hover:cursor-pointer">
        <SpecialButton to={ROUTES.CONTACT} />
      </div>


      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="overflow-hidden relative md:h-[700px] h-[300px] rounded-tr-[70px] rounded-b-[70px] md:mt-0 mt-12"
      >
        <div className="absolute top-0 left-0 md:flex hidden flex-col items-start justify-start">
          <div className="flex items-start justify-start">
            <p className="satoshi font-normal md:text-[27px] text-[17px] max-w-[800px] dark:text-textColorDark text-darkBackground dark:bg-darkBackground bg-textColorDark rounded-br-[70px] pb-24 pt-14 md:pr-44 pr-4">
              We help you reduce load times, improve user experience, and scale
              effortlessly.
            </p>
            <img src={roundCorner} />
          </div>
          <img src={roundCorner} />
        </div>
        <div className="absolute hidden bottom-0 right-0 md:flex flex-col items-end justify-end">
          <img src={roundBottom} />
          <div className="flex items-end justify-end">
            <img src={roundBottom} />
            <div className="dark:bg-darkBackground bg-textColorDark rounded-tl-[70px] w-[400px] h-[250px]" />
          </div>
        </div>
      </div>

      {showGif && (
        <img
          src={currentGif}
          alt="Lightning Fast GIF"
          className="absolute pointer-events-none object-cover rounded-[16px] border-textColorDark border-2 border-opacity-45"
          style={{
            top: gifPosition.y + 10,
            left: gifPosition.x + 10,
            width: "500px", // Adjust size as needed
            height: "300px",
          }}
        />
      )}
    </div>
  );
};

export default HeroSection;
