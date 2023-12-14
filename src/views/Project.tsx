import { fetchProjectById } from "@/api/projects/projects";
import ProjectContent from "@/components/project/ProjectContent";
import Navigation from "@/components/shared/Navigation";
import { useCustomStore } from "@/store/useStore";
import { useIdStore } from "@/store/useUserId";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate, useParams } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { jwt } = useCustomStore();

  const { projectId } = params;
  const [project, setProject] = useState({});
  const { userId } = useIdStore();
  useEffect(() => {
    fetchProjectById(projectId, setProject, userId);
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
