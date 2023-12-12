import { useEffect, useRef, useState } from "react";
import Bug from "../dashboard/Bug";
import "../../styles/animations.css";
import axios from "axios";

const ProjectContent = ({ projectId, projectName }) => {
  const [isBugClicked, setIsBugClicked] = useState(false);
  const animatedRef = useRef(null);
  const animatedRef2 = useRef(null);

  const [inputData, setInputData] = useState({
    projectId: projectId,
    title: "",
    description: "",
    completed: false,
  });

  const setProperty = (property, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };

  const openBugModal = () => {
    setIsBugClicked(true);
  };

  const closeBugModal = () => {
    setIsBugClicked(false);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeBugModal();
      }
    };

    // Attach the keydown event listener to the window
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup: Remove the keydown event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isBugClicked) {
      // Trigger animation when component becomes visible
      animatedRef?.current?.classList.add("modal-is-open");
      animatedRef2?.current?.classList.add("modal-is-open");
    } else {
      // Reset animation when component becomes invisible
      animatedRef?.current?.classList.remove("modal-is-open");
      animatedRef2?.current?.classList.add("modal-is-open");
    }
  }, [isBugClicked]);
  return (
    <>
      <div className="sm:flex-wrap md:flex-nowrap flex justify-between items-center sm:w-11/12 lg:w-8/12 mx-auto mt-8">
        <h2 className="text-content sm:text-2xl md:text-5xl font-onest text-center lg:text-left font-bold mx-auto md:mx-0 lg:mx-0 ">
          {projectName}
        </h2>
        <button className="sm:text-base font-onest self-center sm:mx-auto  md:mb-0 md:mx-0  font-bold text-accent-1 md:text-xl  lg:mb-0 ">
          MEMBERS
        </button>
      </div>
      <section className=" w-full gap-10 mt-7 mx-auto sm:w-11/12 lg:w-8/12 relative">
        {/* Render Bugs */}
        <div className="flex flex-col">
          <input
            onKeyDown={(e) => {
              if (e.key === "Escape") closeBugModal();
            }}
            onClick={() => openBugModal()}
            onChange={(e) => setProperty("title", e.target.value)}
            value={inputData.title}
            placeholder="Enter a new bug title..."
            className="w-full focus:border-accent-1 focus:outline-none relative z-10 font-onest font-medium mt-3 mb-8 bg-bkg border-content border-2 py-4 rounded-md p-2 text-content order-2 "
          />
          {isBugClicked && (
            <>
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Escape") closeBugModal();
                  if (e.key === "Enter") {
                    axios.post("http://localhost:4000/bugs/create", inputData);
                  }
                }}
                name="Text1"
                cols={40}
                rows={5}
                ref={animatedRef2}
                onClick={() => openBugModal()}
                onChange={(e) => setProperty("description", e.target.value)}
                value={inputData.description}
                placeholder="Enter a description of the bug... (optional)"
                className="pb-16 w-full relative z-10 font-onest transition-all focus:border-accent-1 focus:outline-none font-medium mt-3 mt-1 bg-bkg border-content border-2 rounded-md p-2 text-content order-2"
              />
              <div
                ref={animatedRef}
                className="min-h-screen h-full w-full fixed bg-bkg transition-all duration-200 top-0 left-0 z-0 "
              ></div>
              <h3 className="text-content z-10 relative order-1 font-onest font-light text-4xl">
                Welcome to the{" "}
                <span className="font-onest font-bold text-accent-1">
                  focus zone.
                </span>{" "}
              </h3>
              <h4 className="text-content z-10 relative order-5 font-onest font-light text-xl mt-2">
                When you are done
                <span className="sm:hidden md:hidden lg:inline-block">
                  ‎ hit
                </span>
                <span className="sm:inline-block md:inline-block lg:hidden">
                  ‎ touch
                </span>
                <span className="font-onest font-bold text-accent-1 text-red">
                  ‎ Escape ‎
                </span>
                or
                <span className="font-onest font-bold text-accent-1 text-green-400">
                  ‎ Enter.
                </span>
              </h4>
            </>
          )}
        </div>
        <Bug
          type={"project"}
          bugTitle={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus provident voluptatibus commodi a animi."
          }
          date={new Date().toLocaleString()}
          fromProject={"Testing project"}
        />
      </section>
    </>
  );
};

export default ProjectContent;
