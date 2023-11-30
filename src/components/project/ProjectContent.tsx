import Bug from "../dashboard/Bug";

const ProjectContent = () => {
  return (
    <>
      <div className="sm:flex-wrap md:flex-nowrap flex justify-between items-center sm:w-11/12 lg:w-10/12 mx-auto">
        <h2 className="text-content sm:text-2xl md:text-5xl font-onest text-center lg:text-left font-bold mx-auto md:mx-0 lg:mx-0 ">
          Leonardo's Projects
        </h2>
        <button className="sm:text-base font-onest self-center sm:mx-auto  md:mb-0 md:mx-0  font-bold text-accent-1 md:text-xl  lg:mb-0 ">
          MEMBERS
        </button>
      </div>
      <section className=" w-full gap-10 mt-7 mx-auto sm:w-11/12 lg:w-8/12">
        <Bug
          type={"project"}
          bugTitle={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus provident voluptatibus commodi a animi."
          }
          date={new Date().toLocaleString()}
          fromProject={"Testing project"}
        />
      </section>
    </>
  );
};

export default ProjectContent;
