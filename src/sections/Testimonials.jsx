import TestimonialCard from "../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";

const testies = [
  {
    name: "Leo Zovko",
    title: "The Office Company",
    text: "Working with Progmatiq has been an absolute game-changer for our business. Their team not only delivered a high-performing website but truly understood our goals and tailored the solution to fit our unique needs. The improvement in speed and user experience has been remarkable, and the professionalism and communication from start to finish made the process seamless. If you're looking for a partner who combines technical expertise with a genuine commitment to helping you grow, Progmatiq is the perfect choice.",
  },
  {
    name: "Robert Duspara",
    title: "Sveti Rok",
    text: "Progmatiq transformed our online presence. They took our vision and created a fast, user-friendly website that truly represents our brand. The team was responsive, detail-oriented, and proactive in offering solutions we hadn’t even considered. Thanks to their work, we've seen a noticeable increase in engagement and conversions. Progmatiq is the go-to for anyone serious about taking their digital presence to the next level!",
  },
  {
    name: "Izabel Kovacic",
    title: "Lunilou",
    text: "From the initial consultation to the final launch, Progmatiq was exceptional. They delivered a website that not only looks great but performs flawlessly across all devices. Their expertise and dedication made all the difference, and we appreciated their clear communication and transparency every step of the way. Progmatiq is more than just a service provider; they’re a true partner in our success.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col md:px-24 lg:px-32 xl:px-44 px-4 items-start justify-start dark:bg-darkBackground bg-textColorDark overflow-hidden pt-32">
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full">
        <h2 className="font-bold tracking-wide md:text-[54px] text-[34px] dark:text-textColorDark text-darkBackground max-w-[500px]">
          What our Clients say
        </h2>
        <p className="satoshi font-normal md:text-[19px] text-[16px] max-w-[619px] dark:text-textColorDark text-darkBackground">
          Our clients' success stories speak volumes about our commitment and
          impact. From dynamic startups to established brands, each testimonial
          highlights the trust, collaboration, and quality that define our
          partnerships and results.
        </p>
      </div>
      <div className="w-full pt-12">
        <Swiper
          speed={500}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            380: {
              slidesPerView: 1.5,
              slidesOffsetAfter: 0,
            },
            535: {
              slidesPerView: 2,
              slidesOffsetAfter: 0,
            },
            660: {
              slidesPerView: 2.5,
              slidesOffsetAfter: 0,
            },
            1250: {
              slidesPerView: 3,
              slidesOffsetAfter: 15,
            },
          }}
          onSlideChange={(swiper) => {
            setIndex(swiper.realIndex);
          }}
        >
          {testies.map((testie, tIndex) => (
            <SwiperSlide key={tIndex}>
              <TestimonialCard
                name={testie.name}
                title={testie.title}
                text={testie.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
