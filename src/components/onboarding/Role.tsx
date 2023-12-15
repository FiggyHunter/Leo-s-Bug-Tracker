import React, { MouseEvent } from "react";

interface Props {
  roleName: string;
  fullWidth?: boolean;
  active: boolean;
  setRoles: (event: MouseEvent<HTMLButtonElement>) => void;
}

const activeStyle = `border-black bg-accent-1 text-black`;

const Role: React.FC<Props> = ({ roleName, fullWidth, active, setRoles }) => {
  return (
    <button
      onClick={setRoles}
      className={`w-1/2 text-content h-full hover:text-content hover:bg-accent-1 hover:border-black  transition-all duration-250  border-white border-2 rounded-3xl grid place-items-center place-self-end md:text-2xl font-onest font-medium  ${
        fullWidth ? "w-full" : "w-1/2"
      } ${active ? activeStyle : "bg-transparent  text-content"}`}
    >
      {roleName}
    </button>
  );
};

export default Role;
