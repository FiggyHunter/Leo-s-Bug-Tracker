import axios from "axios";

const fetchProjects = async (setProjects, userId) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const fetchedProjects = await axios.get(
      `${import.meta.env.VITE_REST_ENDPOINT}/project`,
      {
        headers: {
          "x-user-id": userId,
        },
      }
    );

    if (fetchedProjects.data.projects.length === 0) {
      setProjects(null);
      return;
    }
    setProjects(fetchedProjects.data.projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const fetchRecentProjects = async (setProjects, userId) => {
  if (userId === "") return;

  try {
    const fetchedProjects = await axios.get(
      `${import.meta.env.VITE_REST_ENDPOINT}/project/recent`,
      {
        headers: {
          "X-USER-ID": userId,
        },
      }
    );
    if (fetchedProjects.data.projects.length === 0) {
      setProjects(null);
      return;
    }
    setProjects(fetchedProjects.data.projects.slice(-2));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const addNewProject = async (projectData, setProjects, userId) => {
  await axios.post(
    `${import.meta.env.VITE_REST_ENDPOINT}/project/create`,
    projectData,
    {
      headers: {
        "x-user-id": userId,
      },
    }
  );
  await fetchProjects(setProjects, userId);
};

const fetchProjectById = async (projectId: String, setProject, userId) => {
  const fetchedProject = await axios.get(
    `${import.meta.env.VITE_REST_ENDPOINT}/project/one/${projectId}`,
    {
      headers: {
        "x-user-id": userId,
      },
    }
  );
  setProject(fetchedProject.data);
};

export { fetchProjects, fetchRecentProjects, addNewProject, fetchProjectById };
