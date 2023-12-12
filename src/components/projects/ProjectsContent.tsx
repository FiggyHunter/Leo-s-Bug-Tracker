import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../../styles/animations.css";
import NewProjectModal from "./NewProjectModal";
import { fetchProjects } from "@/api/projects/projects";
import ProjectSkeletonLoader from "./ProjectSkeletonLoader";

const ProjectsContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState({});
  console.log(projects);
  useEffect(() => {
    fetchProjects(setProjects);
  }, []);
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
        {isModalOpen && <NewProjectModal isModalOpen={isModalOpen} />}
      </div>
      <section
        className={`grid ${
          projects !== null && Object.keys(projects).length === 0
            ? `grid-cols-1`
            : `sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3`
        }  w-full gap-10 mt-7`}
      >
        {projects === null ? (
          <div className="bg-red text-2xl place-self-cente sm:col-span-2 md:col-span-2 lg:col-span-3">
            No projects available.
          </div>
        ) : Object.keys(projects).length === 0 ? (
          <ProjectSkeletonLoader />
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              name={project.projectName}
              description={project.description}
              color={project.color}
            />
          ))
        )}
      </section>
    </>
  );
};

export default ProjectsContent;
