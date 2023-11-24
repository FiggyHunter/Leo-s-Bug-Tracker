import Bug from "./Bug";
import Project from "./Project";

interface Props {
  userName: string | null;
}

const DashboardContent: React.FC<Props> = ({ userName }) => {
  return (
    <>
      <h1 className="hover:cursor-default text-center font-black text-content font-onest text-3xl w-4/5 mx-auto leading-tight lg:py-5 py-10 lg:text-6xl lg:w-full lg:pl-8">
        {userName}'s Dashboard
      </h1>
      <section className="mt-10 hover:cursor-default  lg:grid lg:grid-cols-2 lg:px-8  ">
        <article className="text-center lg:text-left ">
          <h2 className="text-3xl font-bold font-onest text-content lg:text-4xl mb-4 lg:mb-8 text-center lg:text-left ">
            YOUR RECENT BUGS:
          </h2>
          <Bug
            bugTitle={"Testing the title"}
            date={new Date().toLocaleString()}
            fromProject={"Testing project"}
          />
          <Bug
            bugTitle={"Testing the title"}
            date={new Date().toLocaleString()}
            fromProject={"Testing project"}
          />
          <Bug
            bugTitle={"Testing the title"}
            date={new Date().toLocaleString()}
            fromProject={"Testing project"}
          />
          <Bug
            bugTitle={"Testing the title"}
            date={new Date().toLocaleString()}
            fromProject={"Testing project"}
          />
          <Bug
            bugTitle={"Testing the title"}
            date={new Date().toLocaleString()}
            fromProject={"Testing project"}
          />
        </article>
        <div className="border-t-2  border-content  lg:border-l-2 lg:border-t-0 lg:border-content lg:pl-8 ">
          <div className="flex justify-between flex-col lg:flex-row items-center pb-4 lg:pb-8">
            <h2 className="mt-4 lg:mt-0 overflow-hidden text-3xl font-onest font-bold text-content">
              PROJECTS:
            </h2>
            <button className="text-accent-1 font-onest font-bold lg:ml-auto text-xl self-center">
              SEE ALL
            </button>
          </div>
          <Project
            projectTitle={"A cool eco project."}
            projectDescription={
              "Mobile app to manage personal finances with real-time budget tracking, expenditure alerts, and customizable financial goals."
            }
          />
          <Project
            projectTitle={"A cool eco project."}
            projectDescription={
              "Mobile app to manage personal finances with real-time budget tracking, expenditure alerts, and customizable financial goals."
            }
          />
        </div>
      </section>
    </>
  );
};

export default DashboardContent;
