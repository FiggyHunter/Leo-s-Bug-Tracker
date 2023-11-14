import Bug from "./Bug";
import Project from "./Project";

interface Props {
  userName: string | null;
}

const DashboardContent: React.FC<Props> = ({ userName }) => {
  return (
    <>
      <h1 className="hover:cursor-default text-center font-thin text-content font-onest text-3xl w-1/2 mx-auto leading-tight  lg:text-5xl lg:text-left lg:w-full lg:pl-8">
        {userName}'s Dashboard
      </h1>
      <section className="mt-10 hover:cursor-default  lg:grid lg:grid-cols-2 lg:px-8  ">
        <article className="">
          <h2 className="text-2xl font-black text-content lg:text-4xl mb-4 lg:mb-8 ">
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
        <div className="border-t-2  border-content  lg:border-l-2 lg:border-t-0 lg:border-content lg:pl-8">
          <div className="flex justify-between items-center pb-4 lg:pb-8">
            <h2 className="text-2xl font-black text-content lg:text-4xl">
              PROJECTS:
            </h2>
            <button className="text-accent-1 font-onest font-bold ml-auto mr-4 self-center">
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
