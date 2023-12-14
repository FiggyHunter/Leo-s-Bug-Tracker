import { useNavigate } from "react-router-dom";
import Bug from "./Bug";
import Project from "./Project";
import { useEffect, useState } from "react";
import SkelyLoader from "./SkelyLoader";
import { fetchRecentProjects } from "@/api/projects/projects";
import { fetchRecentBugs } from "@/api/bugs/bugs";
import { useIdStore } from "@/store/useUserId";

interface Props {
  userName: string | null;
}

const DashboardContent: React.FC<Props> = ({ userName }) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState({});
  const [bugs, setBugs] = useState({});

  const { userId } = useIdStore();

  console.log(userId);

  useEffect(() => {
    fetchRecentProjects(setProjects, userId);
    fetchRecentBugs(setBugs, userId);
  }, []);

  return (
    <>
      <h1 className="hover:cursor-default text-center font-black text-content font-onest text-3xl w-4/5 mx-auto leading-tight lg:py-5 py-10 lg:text-6xl lg:w-full lg:pl-8">
        {userName}'s Dashboard
      </h1>
      <section className="sm:mt-4 hover:cursor-default  lg:grid lg:grid-cols-2 lg:mt-10  lg:px-8  ">
        <article className="text-center lg:text-left ">
          <h2 className="text-3xl font-bold font-onest text-content lg:text-4xl mb-4 lg:mb-8 text-center lg:text-left ">
            YOUR RECENT BUGS:
          </h2>
          {bugs === null ? (
            <div className="font-onest text-content text-2xl">
              No bugs available.
            </div>
          ) : Object.keys(bugs).length === 0 ? (
            <SkelyLoader />
          ) : (
            bugs.map((bug) => <Bug type={"dashboard"} bug={bug} />)
          )}
        </article>
        <div className="border-t-2  border-content  lg:border-l-2 lg:border-t-0 lg:border-content lg:pl-8 ">
          <div className="flex justify-between flex-col lg:flex-row items-center pb-4 lg:pb-8">
            <h2 className="mt-4 lg:mt-0 overflow-hidden text-3xl font-onest font-bold text-content">
              PROJECTS:
            </h2>
            <button
              onClick={() => navigate("/projects")}
              className="text-accent-1 font-onest font-bold lg:ml-auto text-xl self-center"
            >
              SEE ALL
            </button>
          </div>

          {projects === null ? (
            <div className="font-onest text-content text-2xl">
              No projects available.
            </div>
          ) : Object.keys(projects).length === 0 ? (
            <SkelyLoader />
          ) : (
            projects.map((project) => (
              <Project
                key={project._id}
                projectTitle={project.projectName}
                projectDescription={project.description}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardContent;
