import React from "react";

interface Props {
  projectTitle: String;
  projectDescription: String;
}

const Project: React.FC<Props> = ({ projectTitle, projectDescription }) => {
  return (
    <div className="pb-8">
      <a className="text-accent-1 text-2xl font-onest font-extrabold uppercase ">
        {projectTitle}
      </a>
      <p className="text-content font-onest w-1/2 text-xl">
        {" "}
        {projectDescription}
      </p>
    </div>
  );
};

export default Project;
