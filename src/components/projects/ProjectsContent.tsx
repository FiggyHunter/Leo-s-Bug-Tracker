import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  return (
    <>
      <div className="sm:flex-wrap flex justify-between">
        <h2 className="text-content text-5xl font-onest font-bold">
          Leonardo's Projects
        </h2>
        <button className="w-full font-onest font-bold text-accent-1">
          New Project
        </button>
      </div>
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 mt-7">
        <ProjectCard color={"bg-red"} />
        <ProjectCard color={"bg-blue-500"} />
        <ProjectCard color={"bg-green-200"} />
        <ProjectCard color={"bg-red"} />
        <ProjectCard color={"bg-blue-500"} />
        <ProjectCard color={"bg-green-200"} />
      </section>
    </>
  );
};

export default ProjectsContent;
