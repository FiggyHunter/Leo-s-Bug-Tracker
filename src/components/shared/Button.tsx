import { useButtonLoadingStore } from "@/store/useButtonLoadingStore";

interface ButtonProps {
  text: string;
  buttonId: string;
  handler: (e: React.MouseEvent<HTMLButtonElement>, buttonId: string) => void;
}

const Button: React.FC<ButtonProps> = ({ text, buttonId, handler }) => {
  const { buttonLoading } = useButtonLoadingStore();
  const isLoading = buttonLoading[buttonId] || false;

  return (
    <button
      className="mt-8 mb-4 mx-auto block text-content border-accent-1 border-2 w-full py-2 rounded-xl font-onest font-medium tracking-wider focus:bg-accent-1 focus:text-bkg focus:outline-none    hover:bg-accent-1 hover:text-bkg transition-all duration-300 lg:py-4"
      onClick={(e) => handler(e, buttonId)}
    >
      <div
        className={` ${
          isLoading ? "block" : "hidden"
        } inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <p className={`${isLoading ? "hidden" : "block"}`}>{text}</p>
    </button>
  );
};

export default Button;
