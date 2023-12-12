import axios from "axios";
import useProjectData from "@/hooks/useProjectData";

const fetchProjects = async (setProjects) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const fetchedProjects = await axios.get("http://localhost:4000/project", {
      headers: {
        "x-user-id": "creatorUserId2",
      },
    });

    console.log(fetchedProjects.data.projects);

    if (fetchedProjects.data.projects.length === 0) {
      setProjects(null);
      return;
    }
    setProjects(fetchedProjects.data.projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const fetchRecentProjects = async (setProjects) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const fetchedProjects = await axios.get(
      "http://localhost:4000/project/recent",
      {
        headers: {
          "x-user-id": "creatorUserId2",
        },
      }
    );
    console.log(fetchedProjects.data.projects);
    if (fetchedProjects.data.projects.length === 0) {
      setProjects(null);
      return;
    }
    setProjects(fetchedProjects.data.projects.slice(-2));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const addNewProject = async (projectData) => {
  await axios.post("http://localhost:4000/project/create", projectData, {
    headers: {
      "x-user-id": "creatorUserId2",
    },
  });
};

const fetchProjectById = async (projectId: String, setProject) => {
  const fetchedProject = await axios.get(
    `http://localhost:4000/project/${projectId}`,
    {
      headers: {
        "x-user-id": "creatorUserId2",
      },
    }
  );
  setProject(fetchedProject.data);
};

export { fetchProjects, fetchRecentProjects, addNewProject, fetchProjectById };
