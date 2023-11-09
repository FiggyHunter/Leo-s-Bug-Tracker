interface ButtonProps {
  text: string;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, handler }) => {
  return (
    <button
      className="mt-8 mb-4 mx-auto block text-content border-accent-1 border-2 w-full py-2 rounded-xl font-onest font-medium tracking-wider focus:bg-accent-1 focus:text-bkg focus:outline-none    hover:bg-accent-1 hover:text-bkg transition-all duration-300 lg:py-4"
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
