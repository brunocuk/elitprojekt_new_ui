import roundedBottom from "../assets/roundedBottom.svg";

const TeamCard = ({ name, title, blur, image }) => {
  return (
    <div className="relative aspect-4/5 h-[500px] rounded-[24px] overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-all duration-300 ${blur ? "blur-md" : ""}`}
        style={{
          backgroundImage: `url(${image})`,
          zIndex: 1,
        }}
      ></div>

      {/* Main Content */}
      <div className="absolute bottom-0 left-0 flex items-end z-10">
        <div className="flex flex-col">
          <img src={roundedBottom} className="rotate-90 w-[24px]" />
          <div className="bg-darkBackground p-6 flex flex-col rounded-tr-[24px]">
            <h6 className="font-bold tracking-wider text-textColorDark text-[16px]">
              {name}
            </h6>
            <p className="font-medium satoshi tracking-wider text-textColorDark text-[14px]">
              {title}
            </p>
          </div>
        </div>
        <img src={roundedBottom} className="rotate-90 w-[24px]" />
      </div>
    </div>
  );
};

export default TeamCard;
