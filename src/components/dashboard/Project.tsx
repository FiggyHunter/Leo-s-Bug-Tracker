import React from "react";

interface Props {
  projectTitle: String;
  projectDescription: String;
}

const Project: React.FC<Props> = ({ projectTitle, projectDescription }) => {
  return (
    <div className="pb-8 text-center lg:text-left">
      <a className="text-accent-1 text-2xl font-onest font-extrabold uppercase ">
        {projectTitle}
      </a>
      <p className="text-content font-onest md:w-1/2 font-light w-5/6 mx-auto lg:mx-0 text-xl">
        {projectDescription}
      </p>
    </div>
  );
};

export default Project;
