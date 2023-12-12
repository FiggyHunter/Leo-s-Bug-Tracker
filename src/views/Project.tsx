import { fetchProjectById } from "@/api/projects/projects";
import ProjectContent from "@/components/project/ProjectContent";
import Navigation from "@/components/shared/Navigation";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { projectId } = params;
  const [project, setProject] = useState({});
  useEffect(() => {
    fetchProjectById(projectId, setProject);
  }, []);
  return (
    <>
      <header>
        <Navigation
          navigate={() => {
            navigate("/dashboard");
          }}
        />
      </header>
      <>
        <ProjectContent
          projectId={projectId}
          projectName={project.projectName}
        />
      </>
    </>
  );
};

export default Project;
