import { MouseEvent } from "react";

interface Props {
  active: boolean;
  setter: (event: MouseEvent<HTMLButtonElement>) => void;
  imageUrl: String;
}

const Avatar: React.FC<Props> = ({ imageUrl, active, setter }) => {
  return (
    <button
      onClick={setter}
      className={`relative transition-all duration-200 w-5/6 overflow-hidden bg-accent-1 ${
        active ? "scale-75" : " "
      }`}
    >
      <img className="relative w-full" src={`/${imageUrl}`} />
    </button>
  );
};

export default Avatar;
