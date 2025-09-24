import HeroSection from "../sections/HeroSection";
import PlanedProjects from "../sections/PlanedProjects";
import ConstructionProjects from "../sections/ConstructionProjects";
import transition from "../transition";
import { Helmet } from "react-helmet";
import { useContent } from "../config/contentContext";
import constantsExport from "../config/constants";
import FullScreenVideoSection from "../components/FullScreenVideoSection";
import diPlanVideo from "../assets/video/elitProjektVideo.mp4";
import ContactSection from "../sections/ContactSection";
import FaqComponent from "../components/FaqComponent";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";

const API_PATH = constantsExport.API_PATH;

const HomePage = () => {
  const { content, loading, error } = useContent();

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <>
      <Helmet>
        <title>ElitProjekt | Stambeni objekti izgradnja i prodaja Zagreb & Jadranska obala</title>
        <meta name="description" content="Otkrijte ekskluzivnu ponudu stambenih objekata ElitProjekt u Zagrebu i na jadranskoj obali. Kvalitetni projekti, premium lokacije, profesionalna usluga." />
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
