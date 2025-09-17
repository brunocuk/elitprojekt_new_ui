import HeroSection from "../sections/HeroSection";
import PlanedProjects from "../sections/PlanedProjects";
import ConstructionProjects from "../sections/ConstructionProjects";
import transition from "../transition";
import { Helmet } from "react-helmet";
import { useContent } from "../config/contentContext";
import constantsExport from "../config/constants";
import FullScreenVideoSection from "../components/FullScreenVideoSection"
import diPlanVideo from "../assets/video/elitProjektVideo4k.mp4"
import ContactSection from "../sections/ContactSection";
import FaqComponent from "../components/FaqComponent"

const API_PATH = constantsExport.API_PATH;

const HomePage = () => {
  const { content, loading, error } = useContent();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading content. Please try again.</p>;

  return (
    <>
      <Helmet>
        <title>{content?.homePageSeo?.metaTitle}</title>
        <meta name="description" content={content?.homePageSeo?.metaDescription} />
      </Helmet>

      <HeroSection content={content} />
      <FullScreenVideoSection videoUrl={diPlanVideo} />
      <ConstructionProjects content={content} />
      <PlanedProjects content={content} />
      <ContactSection />
      <FaqComponent content={content} />
    </>
  );
};

export default transition(HomePage);
