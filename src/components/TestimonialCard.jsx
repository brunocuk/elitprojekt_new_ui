const TestimonialCard = ({ name, title, text }) => {
  return (
    <div className="relative flex flex-col gap-6 py-12">
      <h6 className="dark:text-textColorDark text-darkBackground font-bold text-[215px] opacity-15 absolute top-0 right-0 -mt-12">
        “
      </h6>
      <p className="dark:text-textColorDark text-darkBackground satoshi text-[16px] max-w-[409px]">
        "{text}"
      </p>
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-textColorDark h-1 w-8" />
        <div className="flex flex-col gap-1">
          <h6 className="font-bold dark:text-textColorDark text-darkBackground text-[16px]">{name}</h6>
          <p className="dark:text-textColorDark text-darkBackground satoshi text-[12px] max-w-[409px]">
            {title}
          </p>
        </div>
        <div className="bg-ctaColorDark rounded-full w-20 h-20" />
      </div>
    </div>
  );
};

export default TestimonialCard;
