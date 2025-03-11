import rounded from "../assets/rounded.svg";
import roundedBottom from "../assets/roundedBottom.svg";
import TeamCard from "../components/TeamCard";
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

const teamMates = [
  {
    name: "Bruno",
    title: "FrontEnd Developer",
    blur: false,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFVBW2lJxWnew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707738830922?e=1736380800&v=beta&t=jEVx_Hd0WV7hrxnP5LofkTcejwZu_MRBtIGvsT-x9HU"
  },
  {
    name: "Josip",
    title: "BackEnd Developer",
    blur: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Martina",
    title: "UI/UX Designer",
    blur: true,
    image: "https://images.unsplash.com/photo-1511130558090-00af810c21b1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Petar",
    title: "Content Creator",
    blur: false,
    image: "https://images.unsplash.com/photo-1620403724159-40363e84a155?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Lucija",
    title: "Community Manager",
    blur: false,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH1ncQnqFsFew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695904622120?e=1736380800&v=beta&t=mAT75NNTuO8rCoBlP92yduQiz1hLqvpJsBcs-timNUU"
  },
  {
    name: "Coffee",
    title: "Team Energizer",
    blur: false,
    image: "https://images.unsplash.com/photo-1705672763732-538d9a515ec1?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

const AboutUs = () => {
  return (
    <div className="dark:dark:bg-darkBackground bg-textColorDark pt-6 flex flex-col overflow-hidden px-4 md:px-24 lg:px-32 xl:px-44">
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className="w-full relative h-[900px] bg-center bg-cover rounded-[70px] flex flex-col"
      >
        <div className="absolute top-0 left-0">
          <div className="flex items-start">
            <div className="flex flex-col gap-4 bg-darkBackground rounded-br-[70px] py-6 pl-3 pr-8 w-1/2">
              <h1 className="dark:dark:text-textColorDark text-darkBackground font-bold md:text-[79px] text-[40px] leading-tight tracking-wide">
                About us
              </h1>
              <p className="satoshi font-normal md:text-[19px] text-[17px] max-w-[800px] dark:text-textColorDark text-darkBackground pt-4 pb-4 text-pretty">
                Progmatiq is a team of dedicated developers, strategists, and
                creators passionate about crafting custom digital solutions that
                drive real results. Founded on the belief that every business
                has a unique story to tell, we focus on building tools that not
                only meet technical requirements but also enhance user
                experience and spark engagement.
              </p>
            </div>
            <img src={rounded} className="w-[70px]" />
          </div>
          <img src={rounded} className="w-[70px]" />
        </div>
      </div>
      <div className="pt-32 flex md:flex-row flex-col items-start justify-between gap-24">
        <div className="flex flex-col md:w-1/2 w-full gap-6">
          <div className="flex gap-2 items-center justify-start">
            <div className="bg-ctaColorDark rounded-full w-3 h-3" />
            <h2 className="text-sm pr-6 font-bold text-textColorDark tracking-widest">
              Our Approach
            </h2>
          </div>
          <h2 className="font-semibold text-textColorDark satoshi md:text-[48px] text-[38px] leading-none text-pretty">
            We dig deep to understand your goals, then combine our technical
            expertise and creative vision to deliver products that exceed
            expectations.
          </h2>
        </div>
        <p className="satoshi text-textColorDark md:w-1/2 w-full text-[19px]">
          From responsive web applications to targeted digital marketing
          strategies, we're here to empower your business in a fast-moving
          digital landscape.
          <br /> <br />
          With a commitment to quality and innovation, we offer solutions
          tailored specifically to your business needs. Our mission is to
          provide you with tools that make a measurable impact. We work closely
          with you as partners, not just providers, ensuring your project
          reflects your values and vision.
          <br /> <br /> From start to finish, our team is here to guide you
          through the process, offering transparent communication, agile
          responses, and expert insights. We’re committed to going beyond
          standard solutions, pushing the limits of what’s possible with
          technology to help you achieve your digital goals.
        </p>
      </div>

      <div className="pt-32 flex items-start justify-between gap-24">
        <div className="flex flex-col md:w-1/2 w-full gap-6">
          <div className="flex gap-2 items-center justify-start">
            <div className="bg-ctaColorDark rounded-full w-3 h-3" />
            <h2 className="text-sm pr-6 font-bold text-textColorDark tracking-widest">
              Meet Our Team
            </h2>
          </div>
          <h2 className="font-semibold text-textColorDark text-[29px] text-pretty tracking-wider">
            Diverse group of experts dedicated to your success. While not all
            of us are in front of the camera, every one of us is behind the work
            that drives your results.
            {/* Faces or not, we're here to make things happen for you. */}
          </h2>
        </div>
      </div>

      <div className="w-full pt-12">
        <Swiper
          speed={500}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1.1, // Slightly larger for small phones
                spaceBetween: 10,
            },
            425: {
                slidesPerView: 1.25, // Small screen adjustment
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 1.25, // Better for small tablets
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.75,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 3.75, // Adjust for larger desktops
                spaceBetween: 30,
            },
            1800: {
                slidesPerView: 4, // Full view for large screens
                spaceBetween: 40,
            },
        }}
          onSlideChange={(swiper) => {
            setIndex(swiper.realIndex);
          }}
        >
          {teamMates.map((mate, tIndex) => (
            <SwiperSlide key={tIndex}>
              <TeamCard
                name={mate.name}
                title={mate.title}
                image={mate.image}
                blur={mate.blur}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>

      </div>
    </div>
  );
};

export default AboutUs;
