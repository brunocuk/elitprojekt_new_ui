import { MainButton } from "../components";
import { ROUTES } from "../routes/routes";
import { motion } from "framer-motion";
import projectOne from "../assets/videos/projectOne.mp4"

const LatestWork = () => {
  // Sample array for work items; replace with real data or import if available.
  const workItems = [
    { id: 1, image: projectOne, title: "Radijona Tattoo", colSpan: 2, rowSpan: 1 },
    { id: 2, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Project 2", colSpan: 1, rowSpan: 1 },
    { id: 3, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Project 3", colSpan: 1, rowSpan: 1 },
    { id: 4, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Project 4", colSpan: 1, rowSpan: 1 },
    { id: 5, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Project 5", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <div className="flex flex-col md:px-24 lg:px-32 xl:px-44 px-4 items-start justify-start dark:bg-darkBackground bg-textColorDark overflow-hidden pt-32">
      <div className="flex md:flex-row flex-col md:items-center items-start gap-4 justify-between w-full">
        <div>
          <h2 className="font-bold tracking-wide md:text-[54px] text-[34px] dark:text-textColorDark text-darkBackground">Our Latest Works</h2>
          <p className="satoshi font-normal md:text-[19px] text-[16px] max-w-[522px] dark:text-textColorDark text-darkBackground">
            Our latest works exhibit creativity, and dedication, pushing
            boundaries and delivering exceptional quality across various
            industries and disciplines.
          </p>
        </div>
        <div>
          <MainButton to={ROUTES.WORK} text={"View More"} />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8 gallery">
        {workItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg group col-span-${item.colSpan} row-span-${item.rowSpan}`}
            style={{
              gridColumn: `span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
            }}
          >
            {item.image.endsWith(".mp4") ? (
              <video
                src={item.image}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-darkBackground bg-opacity-50 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 overflow-hidden">
              <motion.p initial={{ y: '30vh'}} animate={{ y: '0'}} className="dark:text-textColorDark text-darkBackground font-semibold text-[45px]">{item.title}</motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
