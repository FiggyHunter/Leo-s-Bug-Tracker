import { useEffect, useRef, useState } from "react";
import useProjectData from "@/hooks/useProjectData";

const NewProjectModal = ({ isModalOpen }) => {
  const animatedRef = useRef(null);
  const { projectData, setProjectName, setDescription, setColor } =
    useProjectData();
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
    <section
      ref={animatedRef}
      className="rounded-xl sm:top-full sm:w-5/6 sm:right-7 md:right-11  md:w-48   overflow-hidden absolute transition-all duration-500 right-0 top-3/4 font-onest text-bkg bg-content lg:w-96 flex flex-col"
    >
      <p className="text-center p-4 text-lg">Project Name:</p>
      <input
        className="text-center"
        placeholder="Type your project name here..."
        type="text"
        onChange={(e) => setProjectName(e.target.value)}
        value={projectData.projectName}
      />
      <input
        className="text-center my-4"
        placeholder="Give it a description..."
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={projectData.description}
      />
      <input
        className="mx-auto mt-2"
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={projectData.color}
      />
      <button className="m-4 mx-auto hover:scale-95 transition-transform duration-150 w-1/2 bg-accent-1 p-2">
        Save Project
      </button>
    </section>
  );
};

export default NewProjectModal;
