import { Helmet } from "react-helmet";
import transition from "../transition";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { useState, useEffect } from "react";
import constantsExport from "../config/constants";
import { useLocale } from "../config/localeContext";
import { useContent } from "../config/contentContext";
import PlanedProjects from "../sections/PlanedProjects";
import ContactSection from "../sections/ContactSection";
import FaqComponent from "../components/FaqComponent";

const API_PATH = constantsExport.API_PATH;

const InConstruction = () => {
  const { locale } = useLocale();
  const { content, loading, error } = useContent();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${API_PATH}/api/in-constructions?locale=${locale}&populate=*`
        );
        setProjects(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching home page:", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [locale]);

  return (
    <>
      <Helmet>
        <title>{"content?.projectsSeo.metaTitle"}</title>
        <meta
          name="description"
          content={"content?.projectsSeo.metaDescription"}
        />
      </Helmet>
      <div className="px-11 pt-32 flex flex-col items-center justify-center bg-white">
      <h3 className="font-medium text-[35px] sm:text-[48px] md:text-[48px] lg:text-[48px] xl:text-[57px] 2xl:text-[60px] text-center leading-tight text-dark-color">
          {locale === "hr-HR" ? "Pregledajte naše nekretnine" : "View our properties"}
        </h3>
        
        <p className="font-normal text-sm sm:text-base md:text-base lg:text-base text-center pretty tracking-wide leading-5 sm:leading-6 md:leading-7 max-w-[90%] sm:max-w-[550px] md:max-w-[650px] text-light-gray px-2 pb-12">
          {locale === "hr-HR" ? "Od novogradnje u Zagrebu do obalnih vila - u našoj ponudi pronaći ćete dom koji odgovara vašem stilu života." : "From new construction in Zagreb to coastal villas - in our offer you will find a home that matches your lifestyle."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-11 pb-32">
          {projects?.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.coverImage.url}
              name={project.name}
              location={project.location}
              type={project.type}
              shortDescription={project.excerpt}
              id={project.id}
              slug={project.slug}
              route={"in-construction"}
              content={content}
            />
          ))}
        </div>
      </div>
      <PlanedProjects content={content} />
      <ContactSection />
      <FaqComponent content={content} />
    </>
  );
};

export default transition(InConstruction);
