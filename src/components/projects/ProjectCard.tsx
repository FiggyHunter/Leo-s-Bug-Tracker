import { useNavigate } from "react-router-dom";

const ProjectCard = ({ name, description, color, id }) => {
  const divStyle = {
    backgroundColor: color,
  };

  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(`/project/${id}`)}>
      <div
        style={divStyle}
        className={`lg:h-96 md:h-60 sm:h-36 w-full cursor-pointer  rounded-2xl`}
      ></div>
      <h3 className="text-content md:text-xl text-2xl font-onest font-medium cursor-pointer sm:text-base mt-3">
        {name}
      </h3>
    </article>
  );
};

export default ProjectCard;
