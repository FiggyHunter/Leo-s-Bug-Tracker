import { useCustomStore } from "@/store/useStore";
import React from "react";

interface Props {
  avatar: string | undefined;
  navigate: Function;
}

const Navigation: React.FC<Props> = ({ navigate, avatar }) => {
  const { jwt, setJwt } = useCustomStore();
  return (
    <nav className="sm:w-11/12 md:w-11/12 lg:w-10/12  mx-auto py-3 font-onest items-center grid grid-cols-2">
      <p
        onClick={() => navigate("/dashboard")}
        className="hover:cursor-pointer text-accent-1  font-bold md:text-xl lg:text-3xl ml-2 block"
      >
        LEO'S BUG TRACKER
      </p>
      <div
        className=" flex justify-end gap-3 items-center
      "
      >
        <img className="w-6 h-6 lg:w-7 lg:h-7" src="/bell.svg" />
        <button className="rounded-full overflow-hidden">
          <img
            className="bg-blue-300 w-8 h-8 lg:w-10 lg:h-10"
            src={avatar}
            onClick={() => navigate("/profile")}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
