import { useParams } from "react-router-dom";
import transition from "../transition";
import axios from "axios";
import { useState, useEffect } from "react";
import constantsExport from "../config/constants";
import { useLocale } from "../config/localeContext";
import { useContent } from "../config/contentContext";
import ReactMarkdown from "react-markdown";
import MiniContactForm from "../components/MiniContactForm";
import DownloadButton from "../components/DownloadButton";
import ConstructionProjects from "../sections/ConstructionProjects";
import ContactSection from "../sections/ContactSection";
import FaqComponent from "../components/FaqComponent";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_PATH = constantsExport.API_PATH;

const InConstructionDetails = () => {
  const { locale } = useLocale();
  const { content } = useContent();
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(
          `${API_PATH}/api/in-constructions?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`
        );
        const data = res.data.data[0];
        setProject(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project:", err);
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug, locale]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!project) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>{project?.name} | {project?.location} | Elit Projekt</title>
        <meta
          name="description"
          content={project?.description?.substring(0, 160)}
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-32 lg:pt-44">
        <div className="mx-auto px-4 lg:px-8">
          {/* Property Title Mobile */}
          <h1 className="text-4xl lg:text-5xl font-normal text-dark-text flex lg:hidden pb-4">
            {project?.name}
          </h1>

          {/* Location and Type Tags Mobile */}
          <div className="flex lg:hidden flex-wrap gap-4 pb-8">
            <div className="flex items-center gap-2 bg-light-gray/10 px-4 py-2 rounded-full">
              <svg
                className="w-4 h-4 text-dark-text"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-dark-text">
                {project?.location}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-light-gray/10 px-4 py-2 rounded-full">
              <svg
                className="w-4 h-4 text-dark-text"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-sm font-medium text-dark-text">
                {project?.type}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Image Gallery */}
            <div className="order-1 lg:order-1">
              <div className="space-y-4">
                {/* Main Gallery */}
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      nextEl: ".property-swiper-button-next",
                      prevEl: ".property-swiper-button-prev",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                    className="w-full h-full"
                  >
                    {project?.images?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img.url}
                          alt={`${project.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}

                    {/* Custom Navigation Arrows */}
                    <div className="property-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200">
                      <svg
                        className="w-5 h-5 text-dark-text"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>

                    <div className="property-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200">
                      <svg
                        className="w-5 h-5 text-dark-text"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Swiper>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project?.images?.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        // Find the swiper instance and go to slide
                        const swiperEl = document.querySelector(".swiper");
                        if (swiperEl && swiperEl.swiper) {
                          swiperEl.swiper.slideToLoop(index);
                        }
                      }}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        activeSlide === index
                          ? "border-black shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Apartment One Gallery - Conditional */}
              {project?.apartOneImages && project.apartOneImages.length > 0 && (
                <div className="space-y-4 mt-8">
                  {/* Apartment One Main Gallery */}
                  <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      slidesPerView={1}
                      loop={true}
                      navigation={{
                        nextEl: ".apart-one-swiper-button-next",
                        prevEl: ".apart-one-swiper-button-prev",
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      className="w-full h-full"
                    >
                      {project.apartOneImages.map((media, index) => (
                        <SwiperSlide key={index}>
                          {media.mime?.startsWith("video/") ? (
                            <video
                              src={media.url}
                              className="w-full h-full object-cover"
                              controls
                              muted
                            />
                          ) : (
                            <img
                              src={media.url}
                              alt={`Apartment 1 - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </SwiperSlide>
                      ))}

                      {/* Custom Navigation Arrows */}
                      <div className="apart-one-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200">
                        <svg
                          className="w-5 h-5 text-dark-text"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </div>

                      <div className="apart-one-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200">
                        <svg
                          className="w-5 h-5 text-dark-text"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Swiper>
                  </div>

                  {/* Apartment One Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {project.apartOneImages.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const swiperEl =
                            document.querySelector(".apart-one-swiper");
                          if (swiperEl && swiperEl.swiper) {
                            swiperEl.swiper.slideToLoop(index);
                          }
                        }}
                        className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 relative"
                      >
                        {media.mime?.startsWith("video/") ? (
                          <>
                            <video
                              src={media.url}
                              className="w-full h-full object-cover"
                              muted
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </>
                        ) : (
                          <img
                            src={media.url}
                            alt={`Apartment 1 Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Apartment Two Gallery - Conditional */}
              {project?.apartTwoImages && project.apartTwoImages.length > 0 && (
                <div className="space-y-4 mt-8 mb-16">
                  {/* Apartment Two Main Gallery */}
                  <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      slidesPerView={1}
                      loop={true}
                      navigation={{
                        nextEl: ".apart-two-swiper-button-next",
                        prevEl: ".apart-two-swiper-button-prev",
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      className="w-full h-full apart-two-swiper"
                    >
                      {project.apartTwoImages.map((media, index) => (
                        <SwiperSlide key={index}>
                          {media.mime?.startsWith("video/") ? (
                            <video
                              src={media.url}
                              className="w-full h-full object-cover"
                              controls
                              muted
                            />
                          ) : (
                            <img
                              src={media.url}
                              alt={`Apartment 2 - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </SwiperSlide>
                      ))}

                      {/* Custom Navigation Arrows */}
                      <div className="apart-two-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200">
                        <svg
                          className="w-5 h-5 text-dark-text"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </div>

                      <div className="apart-two-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200">
                        <svg
                          className="w-5 h-5 text-dark-text"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Swiper>
                  </div>

                  {/* Apartment Two Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {project.apartTwoImages.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const swiperEl =
                            document.querySelector(".apart-two-swiper");
                          if (swiperEl && swiperEl.swiper) {
                            swiperEl.swiper.slideToLoop(index);
                          }
                        }}
                        className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 relative"
                      >
                        {media.mime?.startsWith("video/") ? (
                          <>
                            <video
                              src={media.url}
                              className="w-full h-full object-cover"
                              muted
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </>
                        ) : (
                          <img
                            src={media.url}
                            alt={`Apartment 2 Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Property Details */}
            <div className="order-2 lg:order-2">
              <div className="space-y-6">
                {/* Property Title */}
                <h1 className="text-4xl lg:text-5xl font-normal text-dark-text hidden lg:flex">
                  {project?.name}
                </h1>

                {/* Location and Type Tags */}
                <div className="hidden lg:flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-light-gray/10 px-4 py-2 rounded-full">
                    <svg
                      className="w-4 h-4 text-dark-text"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-dark-text">
                      {project?.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-light-gray/10 px-4 py-2 rounded-full">
                    <svg
                      className="w-4 h-4 text-dark-text"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="text-sm font-medium text-dark-text">
                      {project?.type}
                    </span>
                  </div>
                </div>

                {/* Main Description */}
                <div className="prose prose-lg text-lg leading-tight">
                  <ReactMarkdown
                    class="text-gray-700 leading-relaxed"
                    components={{
                      h3: ({ node, ...props }) => (
                        <h3
                          className="text-xl font-bold text-dark-text mt-6 mb-3"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="mb-4 leading-relaxed" {...props} />
                      ),
                      strong: ({ node, ...props }) => (
                        <strong
                          className="font-bold text-dark-text"
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc pl-6 mb-4 space-y-1"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="leading-relaxed" {...props} />
                      ),
                    }}
                  >
                    {project?.description}
                  </ReactMarkdown>
                </div>
                {/* Bottom Section - Map and Contact Form if apart*/}
                {project?.apartOneImages &&
                  project.apartOneImages.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 lg:gap-16 mt-16 pb-16 pt-6">
                      {/* Contact Form */}
                      <div className="order-2 bg-white drop-shadow-lg p-6 rounded-2xl">
                        <MiniContactForm />
                      </div>

                      {/* Google Maps */}
                      <div className="order-1">
                        <div className="relative w-full h-[380px] rounded-2xl overflow-hidden">
                          {project?.googleMaps ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: project.googleMaps,
                              }}
                              className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <p className="text-gray-500">Map not available</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Bottom Section - Map and Contact Form if no apart*/}
          {project?.apartOneImages === null && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16 pb-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1 bg-white drop-shadow-lg p-6 rounded-2xl">
                <MiniContactForm />
              </div>

              {/* Google Maps */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full h-[380px] rounded-2xl overflow-hidden">
                  {project?.googleMaps ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: project.googleMaps }}
                      className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500">Map not available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hide default Swiper navigation */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          .swiper-pagination {
            bottom: 16px !important;
          }
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.7 !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }
        `}</style>
      </div>
      <div className="bg-green w-full flex flex-col gap-10 items-center justify-center py-12 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-44">
        <h3 className="text-white font-normal text-5xl">
          {locale === "hr-HR" ? "Tlocrt nekretnine" : "Property blueprint"}
        </h3>
        <DownloadButton
          text={locale === "hr-HR" ? "Tlocrt nekretnine" : "Property blueprint"}
          blueprint={project?.blueprint} // Pass the entire blueprint object
        />
        <img
          src={project?.blueprintImage?.url}
          alt={""}
          className="w-full object-contain"
        />
      </div>
      <ConstructionProjects content={content} />
      <ContactSection />
      <FaqComponent content={content} />
    </>
  );
};

export default transition(InConstructionDetails);
