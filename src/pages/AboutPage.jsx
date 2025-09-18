import { Helmet } from "react-helmet";
import transition from "../transition";
import axios from "axios";
import { useState, useEffect } from "react";
import constantsExport from "../config/constants";
import { useLocale } from "../config/localeContext";
import { useContent } from "../config/contentContext";
import ReactMarkdown from "react-markdown";
import operation from "../assets/images/whereWeOperate.png"
import PlanedProjects from "../sections/PlanedProjects"
import ContactSection from "../sections/ContactSection"
import FaqComponent from "../components/FaqComponent"

const API_PATH = constantsExport.API_PATH;

const AboutPage = () => {
  const { locale } = useLocale();
  const { content } = useContent();
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(
          `${API_PATH}/api/about-us?locale=${locale}&populate=*`
        );
        setAboutContent(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching home page:", err);
        setLoading(false);
      }
    };

    fetchContent();
  }, [locale]);

  return (
    <>
      <Helmet>
        <title>O nama | ElitProjekt - Gradnja stambenih objekata Zagreb</title>
        <meta
          name="description"
          content="ElitProjekt d.o.o. - tvrtka osnovana 2019. za gradnju i prodaju stambenih objekata u Hrvatskoj. Kvalitetni materijali, potpuna dokumentacija, pouzdanost."
        />
      </Helmet>
      
      {/* Main content container */}
      <div className="pt-32 flex flex-col items-start justify-center gap-6 sm:gap-8 lg:gap-10 bg-white px-4 sm:px-6 md:px-8 lg:px-8">
        
        {/* Hero title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] max-w-full lg:max-w-[900px] font-medium text-pretty leading-none">
          {aboutContent?.heroTitle}
        </h1>

        {/* About content section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-32 w-full">
          
          {/* About image */}
          <div className="w-full lg:w-1/2 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-1 lg:order-1">
            <img
              src={aboutContent?.aboutImage.url}
              alt="About us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About text content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg text-sm sm:text-base lg:text-lg leading-tight w-full lg:w-1/2 order-2 lg:order-2">
            <ReactMarkdown
              class="text-light-gray leading-relaxed"
              components={{
                h2: ({ node, ...props }) => (
                  <h3
                    className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-4xl font-semibold text-dark-text mt-4 sm:mt-6 mb-2 sm:mb-3 leading-tight"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-lg sm:text-xl font-bold text-dark-text mt-4 sm:mt-6 mb-2 sm:mb-3"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-3 sm:mb-4 leading-relaxed" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-bold text-dark-text" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="leading-relaxed" {...props} />
                ),
              }}
            >
              {aboutContent?.heroSubtitle}
            </ReactMarkdown>
          </div>
        </div>

        {/* Work location section */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] max-w-full lg:max-w-[900px] font-medium text-pretty leading-none mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          {aboutContent?.workLocation}
        </h1>
        
        {/* Operation map image */}
        <div className="w-full rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={operation}
            alt="Where we operate"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Additional sections */}
      <div className="pt-8 sm:pt-10 lg:pt-12">
        <PlanedProjects content={content} />
        <ContactSection />
        <FaqComponent content={content} />
      </div>
    </>
  );
};

export default transition(AboutPage);