import { Path, useNavigate } from "react-router-dom";

interface ButtonNavigationProps {
  text: String;
  route: Partial<Path> | string;
  styleType?: String;
}

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({
  text,
  route,
  styleType,
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(route);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`px-5 py-3 my-4 font-onest font-bold text-accent-1 bg-transparent  ${
        styleType === "secondary"
          ? "hover:font-black"
          : "border-accent-1 border-2  hover:text-black hover:bg-accent-1   duration-250 hover:scale-105 transition-all duration-250"
      } `}
    >
      {text}
    </button>
  );
};

export default ButtonNavigation;
