import React from "react";

const Navigation = () => {
  return (
    <nav className="w-full p-3 font-onest items-center  grid grid-cols-2">
      <p className="hover:cursor-pointer text-accent-1  font-bold md:text-xl lg:text-3xl ml-2 block">
        LEO'S BUG TRACKER
      </p>
      <div
        className=" flex justify-end gap-3 items-center
      "
      >
        <img className="w-5 h-5 lg:w-7 lg:h-7" src="/bell.svg" />
        <button className="rounded-full overflow-hidden">
          <img
            className="bg-blue-300 w-5 h-5 lg:w-10 lg:h-10"
            src="/panda.webp"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
