import { useCustomStore } from "@/store/useStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/shared/Navigation";
import { useJwt } from "react-jwt";
import ProjectsContent from "@/components/projects/ProjectsContent";
import { useIdStore } from "@/store/useUserId";

const Projects = () => {
  const { jwt } = useCustomStore();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const token = useJwt(jwt) || null;

  const { userId, setUserId } = useIdStore();

  useEffect(() => {
    // Validate the jwt value obtained from the store
    if (!jwt) {
      console.log("No jwt, navigating to /login");
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
        console.log("Role or Avatar unset, navigating to /onboarding");
        navigate("/onboarding");
        return;
      }

      if (token.decodedToken.Name === "unset") {
        console.log("Name unset, navigating to /onboarding-name");
        navigate("/onboarding-name");
        return;
      }

      // Set user and user ID
      setUser(token.decodedToken);
      setUserId(token.decodedToken.sub);
      console.log(user);
    }
  }, [token.decodedToken]);

  return (
    <div className="h-my-screen grid custom-rows-2 grid-cols-1">
      <header>
        <Navigation
          navigate={() => {
            navigate("/dashboard");
          }}
          avatar={`/${user?.Avatar}`}
        />
      </header>
      <main className="mt-8 mb-12 w-10/12 mx-auto px-4">
        <ProjectsContent userName={user?.Name} userId={userId} />
      </main>
    </div>
  );
};

export default Projects;
