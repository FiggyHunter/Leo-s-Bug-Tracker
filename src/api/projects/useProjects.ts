import axios from "axios";

const fetchProjects = async (setProjects) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const fetchedProjects = await axios.get("http://localhost:4000/project", {
      headers: {
        "X-USER-ID": "creatorUserId2",
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

export { fetchProjects };
