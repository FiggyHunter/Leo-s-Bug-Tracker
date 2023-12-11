import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ name, description, color }) => {
  const divStyle = {
    backgroundColor: color,
  };
  return (
    <article>
      <div
        style={divStyle}
        className={`lg:h-96 md:h-60 sm:h-36 w-full cursor-pointer  rounded-2xl`}
      ></div>
      <h3 className="text-content md:text-xl text-2xl font-onest font-medium cursor-pointer sm:text-base mt-3">
        Project name bla bla blah Project name bla bla blah.
      </h3>
    </article>
  );
};

export default ProjectCard;
