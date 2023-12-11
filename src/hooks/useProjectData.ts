import { useState } from "react";

const useProjectData = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    description: "",
    color: "",
  });
  const setProperty = (property, value) => {
    setProjectData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };
  return {
    projectData,
    setProjectName: (name: string) => setProperty("projectName", name),
    setDescription: (description: string) =>
      setProperty("description", description),
    setColor: (color: string) => setProperty("color", color),
  };
};

export default useProjectData;
