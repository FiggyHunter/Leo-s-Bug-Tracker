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
  const [user, setUser] = useState({});
  const token = useJwt(jwt) || null;
  const { projectId } = params;
  const [project, setProject] = useState({});
  const { userId } = useIdStore();
  useEffect(() => {
    // Validate the jwt value obtained from the store
    if (!jwt) {
      navigate("/login");
      return;
    }

    if (token.isExpired) {
      // Implement token refresh or logout if expired
      navigate("/login");
      return;
    }

    if (token.decodedToken) {
      // Additional checks for decoded token properties
      if (
        token.decodedToken.Role === "unset" ||
        token.decodedToken.Avatar === "unset"
      ) {
        navigate("/onboarding");
        return;
      }

      if (token.decodedToken.Name === "unset") {
        navigate("/onboarding-name");
        return;
      }

      // Set user and user ID
      setUser(token.decodedToken);
    }
  }, [token.decodedToken]);

  useEffect(() => {
    fetchProjectById(projectId, setProject, userId);
  }, []);
  return (
    <>
      <header>
        <Navigation
          avatar={`/${user?.Avatar}`}
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
