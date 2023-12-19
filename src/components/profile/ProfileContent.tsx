import { useEffect, useState } from "react";
import InputField from "../shared/InputField";
import "@/styles/grid.css";

const ProfileContent = ({ name }) => {
  const [desiredName, setDesiredName] = useState("");

  useEffect(() => {
    setDesiredName(name);
  }, [name]);

  const handleNameChange = (value) => {
    setDesiredName(value);
  };

  return (
    <main className="grid  grid-rows-custom-2 h-full">
      <section className="mt-8 flex sm:flex-col md:flex-col lg:flex-row lg:justify-between sm:w-11/12 md:w-11/12 lg:w-10/12 mx-auto">
        <h2 className="font-onest text-center font-light text-content sm:text-xl  lg:text-5xl hover:cursor-default">
          This is your profile
        </h2>
        <button className="text-content border-accent-1 border-2 sm:w-1/2 md:w-1/2 lg:w-fit sm:mx-auto lg:mx-0 lg:px-8 px-1 py-2  sm:text-sm md:text-sm sm:mt-3 md:mt-5 lg:mt-0 font-onest font-extrabold lg:text-xl cursor-pointer hover:bg-accent-1 hover:text-bkg hover:scale-95 transition-all duration-200">
          SAVE CHANGES
        </button>
      </section>
      <section className="grid mt-8 sm:grid-cols-1 md:grid-cols-1 sm:justify-items-center md:sm:justify-items-center lg:grid-cols-2 lg:justify-items-stretch sm:gap-5 lg:gap-0 grid-cols-2 sm:w-11/12 md:w-11/12 lg:w-10/12 mx-auto lg:gap-10 lg:content-center lg:mb-24  ">
        <article>
          <h3 className="font-onest font-bold sm:text-base sm:text-center sm:mb-5 lg:mb-0 lg:text-4xl text-accent-1">
            BASIC INFORMATION, CLICK TO EDIT
          </h3>
          <div className="flex sm:flex-col md:flex-col lg:flex-row  items-center gap-5 sm:w-5/6 lg:w-5/6 sm:mx-auto text-center mt-12">
            <div>
              <p className="font-onest text-content font-bold lg:text-4xl   ">
                Your name:
              </p>
              <input
                className="text-accent-1 bg-transparent font-onest font-bold text-2xl w-full text-center"
                type="text"
                value={desiredName}
                onChange={(e) => handleNameChange(e.target.value)}
              />
              <p className="font-onest text-content font-bold lg:text-4xl ">
                Your role:{" "}
              </p>
              <input
                className="text-accent-1 bg-transparent font-onest font-bold text-2xl w-full text-center"
                type="text"
                value={desiredName}
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>
            <div className="w-1/2 text-center ">
              <img
                className="w-2/3  lg:ml-auto"
                src="/panda.webp"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </article>
        <article className="h-full ">
          <h3 className="font-onest font-bold sm:text-center lg:text-start sm:text-xl md:text-xl lg:text-4xl text-accent-1 ">
            RESET YOUR PASSWORD
          </h3>
          <div className="flex items-center gap-5 mt-12 lg:border-l-2 lg:border-content pl-4">
            <div>
              <p className="font-onest text-content font-bold">Old password:</p>
              <InputField />
              <p className="font-onest text-content font-bold">New password:</p>
              <InputField />
            </div>
          </div>
        </article>
      </section>
      <div className="font-onest text-content font-bold self-end mb-4 mx-auto blockd text-center w-full">
        <button className="w-fit text-red text-2xl">DELETE YOUR ACCOUNT</button>
      </div>
    </main>
  );
};

export default ProfileContent;
