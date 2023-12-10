import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../../styles/animations.css";

const ProjectsContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animatedRef = useRef(null);
  useEffect(() => {
    if (isModalOpen) {
      // Trigger animation when component becomes visible
      animatedRef?.current?.classList.add("modal-is-open");
    } else {
      // Reset animation when component becomes invisible
      animatedRef?.current?.classList.remove("modal-is-open");
    }
  }, [isModalOpen]);
  return (
    <>
      <div className="sm:flex-wrap relative flex justify-between items-center">
        <h2 className="text-content w-full md:w-auto text-5xl font-onest text-center lg:text-left font-bold ">
          Leonardo's Projects
        </h2>
        <button
          onClick={() => setIsModalOpen((prevValue) => !prevValue)}
          className="font-onest  self-center sm:mx-auto md:mx-0 font-bold text-accent-1 text-xl mb-4 lg:mb-0 "
        >
          New Project
        </button>
        {isModalOpen && (
          <section
            ref={animatedRef}
            className="rounded-xl sm:top-full sm:w-5/6 sm:right-7 md:right-11  md:w-48   overflow-hidden absolute transition-all duration-500 right-0 top-3/4 font-onest text-bkg bg-content w-96 flex flex-col"
          >
            <p className="text-center p-4 text-lg">Project Name:</p>
            <input
              className="text-center"
              placeholder="Type your project name here..."
              type="text"
            />
            <input
              className="mx-auto mt-2"
              placeholder="Type your project name here..."
              type="color"
            />
            <button className="m-4 mx-auto hover:scale-95 transition-transform duration-150 w-1/2 bg-accent-1 p-2">
              Save Project
            </button>
          </section>
        )}
      </div>
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 mt-7">
        <ProjectCard color={"bg-red"} />
        <ProjectCard color={"bg-blue-500"} />
        <ProjectCard color={"bg-green-200"} />
      </section>
    </>
  );
};

export default ProjectsContent;
