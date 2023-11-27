import React from "react";

const ProjectCard = ({ color }) => {
  return (
    <article>
      <div className={`md:h-96 sm:h-36 w-full cursor-pointer ${color}`}></div>
      <h3 className="text-content text-2xl font-onest font-medium cursor-pointer sm:text-base mt-3">
        Project name bla bla blah Project name bla bla blah.
      </h3>
    </article>
  );
};

export default ProjectCard;
