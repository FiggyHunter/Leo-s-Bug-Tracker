import InputField from "../shared/InputField";

const ProfileContent = () => {
  return (
    <main className="grid bg-blue-200 items-center h-full">
      <section className="mt-8 flex sm:flex-col md:flex-col lg:flex-row lg:justify-between bg-red sm:w-11/12 md:w-11/12 lg:w-10/12 mx-auto  relative">
        <h2 className="font-onest text-center font-light text-content sm:text-xl  lg:text-5xl">
          This is your profile
        </h2>
        <button className="text-content sm:text-sm md:text-sm sm:mt-3 md:mt-5 font-onest font-extrabold lg:text-xl">
          SAVE CHANGES
        </button>
      </section>
      <section className="grid mt-8 sm:grid-cols-1 md:grid-cols-1 sm:justify-items-center md:sm:justify-items-center lg:grid-cols-2 lg:justify-items-stretch sm:gap-5 lg:gap-0 grid-cols-2 sm:w-11/12 md:w-11/12 lg:w-10/12 mx-auto lg:gap-10 content-center  bg-red">
        <article className="">
          <h3 className="font-onest font-bold lg:text-3xl text-accent-1">
            BASIC INFORMATION, CLICK TO EDIT
          </h3>
          <div className="flex items-center gap-5">
            <div>
              <p className="font-onest text-content font-bold lg:text-4xl w-full">
                Your name:{" "}
              </p>
              <input type="text" />
              <p className="font-onest text-content font-bold lg:text-4xl w-full">
                Your role:{" "}
              </p>
              <input type="text" />
            </div>
            <div className="w-1/2">
              <img
                className="w-1/2 ml-auto"
                src="/panda.webp"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </article>{" "}
        <article>
          <h3 className="font-onest text-content font-bold sm:text-center lg:text-start sm:text-xl md:text-xl lg:text-3xl">
            RESET YOUR PASSWORD
          </h3>
          <div className="flex items-center gap-5 bg-orange-300">
            <div>
              <p className="font-onest text-content font-bold">
                Old password:{" "}
              </p>
              <InputField />
              <p className="font-onest text-content font-bold">Your role: </p>
              <InputField />
            </div>
          </div>
        </article>
      </section>
      <div className="font-onest text-content font-bold absolute bottom-3 mx-auto blockd text-center w-full">
        <button className="w-fit text-red text-2xl">DELETE YOUR ACCOUNT</button>
      </div>
    </main>
  );
};

export default ProfileContent;
