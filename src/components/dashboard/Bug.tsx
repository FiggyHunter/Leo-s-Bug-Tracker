import React from "react";

interface Props {
  bugTitle: String;
  fromProject: String;
  date: String;
  type: "dashboard" | "project";
}

const Bug: React.FC<Props> = ({ bugTitle, fromProject, date }) => {
  return (
    <article className="mb-5">
      <a className="text-accent-1 font-onest font-extrabold uppercase text-2xl">
        {bugTitle}
      </a>
      <p className="font-onest font-light text-content">
        @ {fromProject} ({date})
      </p>
    </article>
  );
};

export default Bug;
