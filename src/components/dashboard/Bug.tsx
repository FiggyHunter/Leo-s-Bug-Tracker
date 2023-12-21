import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  bugTitle?: String;
  fromProject?: String;
  description?: String;
  date?: String | Date;
  type?: "dashboard" | "project";
  bug?: any;
}

const Bug: React.FC<Props> = ({ fetchBugs, type, bug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const fromProject = bug.projectId;
  const fetchProjectName = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REST_ENDPOINT}/project/info`,
        {
          headers: { "project-id": fromProject.toString() },
        }
      );

      setProjectName(response.data);
    } catch (error) {
      console.error("Error fetching project name:", error);
      // Handle the error, e.g., set a default project name or show an error message
    }
  };

  useEffect(() => {
    fetchProjectName();
  }, []);

  return (
    <article className={`mb-5 cursor-default `}>
      <div
        className={`${
          type === "project"
            ? "grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2"
            : "flex"
        }`}
      >
        <a
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          className={` ${
            bug.completed === false ? "text-accent-1" : "text-green-400"
          } font-onest font-extrabold uppercase text-2xl`}
        >
          {bug.title}
          <img
            className={`inline-block ml-2 ${
              type === "project" ? "block" : "hidden"
            }`}
            width="25px"
            height="20px"
            src={isOpen === false ? `/arrow-down.svg` : `/arrow-up.svg`}
          />
        </a>
        {isOpen && type === "project" && (
          <p className="text-content">{bug.description}</p>
        )}

        {isOpen && type === "project" && (
          <div className="flex gap-3">
            <button
              onClick={async (e) => {
                await axios.patch(
                  `${import.meta.env.VITE_REST_ENDPOINT}/bugs/update/${bug._id}`
                );
                await fetchBugs();
              }}
              className="p-2 px-5 bg-accent-1 my-2 w-fit"
            >
              {bug.completed === false
                ? "Mark as completed"
                : "Mark as incomplete"}
            </button>
            {isOpen && type === "project" && (
              <button className="p-2 px-5 bg-rose-600 text-content my-2 w-fit">
                Delete the bug
              </button>
            )}{" "}
          </div>
        )}
      </div>

      <p className="font-onest font-light text-content">
        @ {projectName} (
        {new Date(bug.timestamp).toLocaleString("en-GB", { timeZone: "UTC" })})
      </p>
    </article>
  );
};

export default Bug;
