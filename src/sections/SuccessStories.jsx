import { Player, Controls } from "@lottiefiles/react-lottie-player";

const SuccessStories = () => {
  return (
    <div className="flex flex-col md:px-24 lg:px-32 xl:px-44 px-4 items-start justify-start dark:bg-darkBackground bg-textColorDark overflow-hidden pt-32">
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full">
        <h2 className="font-bold tracking-wide md:text-[54px] text-[34px] dark:text-textColorDark text-darkBackground max-w-[500px]">
          Our Success Stories
        </h2>
        <p className="satoshi font-normal md:text-[19px] text-[16px] max-w-[619px] dark:text-textColorDark text-darkBackground">
          Our success stories showcase resilience, innovation and determination.
          They epitomize our commitment to excellence, collaboration and
          adaptability, demonstrating transformative journeys that inspire and
          drive future achievements.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <div className="flex items-center justify-center h-[200px] overflow-hidden">
      <Player
        autoplay
        loop
        src="https://lottie.host/9e6dad76-3631-486c-a696-3cede9aa8838/xPbYw7fOw9.json"
        className="md:w-[500px] w-[300px]"
      ></Player>
      </div>
      <div className="flex items-center justify-between w-full max-w-[619px]">
        <div>
          <h6 className="dark:text-textColorDark text-darkBackground font-bold md:text-[45px] text-[35px]">&lt; 3 s</h6>
          <p className="satoshi md:text-[19px] text-[14px] font-medium dark:text-textColorDark text-darkBackground">Load Times</p>
        </div>
        <div>
          <h6 className="dark:text-textColorDark text-darkBackground font-bold md:text-[45px] text-[35px]">10+</h6>
          <p className="satoshi md:text-[19px] text-[14px] font-medium dark:text-textColorDark text-darkBackground">Years of Experience</p>
        </div>
        <div>
          <h6 className="dark:text-textColorDark text-darkBackground font-bold md:text-[45px] text-[35px]">100k+</h6>
          <p className="satoshi md:text-[19px] text-[14px] font-medium dark:text-textColorDark text-darkBackground">Visitors Handled</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SuccessStories;
