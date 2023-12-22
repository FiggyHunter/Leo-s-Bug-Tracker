import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/shared/Navigation";
import ProjectsContent from "@/components/projects/ProjectsContent";
import useAuthToken from "@/hooks/useAuthToken";

const Projects = () => {
  const { handleTokenCheck, userId, user, token } = useAuthToken();
  const navigate = useNavigate();
  const fetchData = async () => {
    await handleTokenCheck();
  };

  useEffect(() => {
    fetchData();
  }, [userId, user, token]);

  return (
    <div className="h-my-screen grid custom-rows-2 grid-cols-1">
      <header>
        <Navigation navigate={navigate} avatar={`/${user?.Avatar}`} />
      </header>
      <main className="mt-8 mb-12 w-10/12 mx-auto px-4">
        <ProjectsContent userName={user?.Name} userId={user?.sub} />
      </main>
    </div>
  );
};

export default Projects;
