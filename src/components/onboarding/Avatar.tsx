import React from "react";

interface Props {
  imageUrl: String;
}

const Avatar: React.FC<Props> = ({ imageUrl }) => {
  return (
    <button className="w-full bg-accent-1 h-full ">
      <img src={`/${imageUrl}`} />
    </button>
  );
};

export default Avatar;
