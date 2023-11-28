import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  return (
    <>
      <div className="sm:flex-wrap flex justify-between items-center">
        <h2 className="text-content text-5xl font-onest text-center lg:text-left font-bold ">
          Leonardo's Projects
        </h2>
        <button className="font-onest self-center sm:mx-auto md:mx-0 font-bold text-accent-1 text-xl mb-4 lg:mb-0 ">
          New Project
        </button>
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
