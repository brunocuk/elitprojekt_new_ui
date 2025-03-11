import LearnMoreButton from "./LearnMoreButton";

const BlogCard = ({ to, title, shortDescription, image}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(14,15,17,1) 0%, rgba(14,15,17,0) 100%), url(${image})`,
      }}
      className="w-full aspect-square bg-cover bg-center rounded-[24px] flex flex-col items-start justify-end p-6 gap-1"
    >
      <h6 className="font-bold text-textColorDark text-[25px]">{title}</h6>
      <p className="satoshi font-medium text-[16px] text-textColorDark">{shortDescription}</p>
      <LearnMoreButton to={to} />
    </div>
  );
};

export default BlogCard;
