import { Path, useNavigate } from "react-router-dom";

interface ButtonNavigationProps {
  text: String;
  route: Partial<Path>;
}

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({ text, route }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(route);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="mx-auto block my-4 text-accent-1 hover:cursor-pointer tracking-wider font-onest font-bold"
    >
      {text}
    </button>
  );
};

export default ButtonNavigation;
