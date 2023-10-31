interface InputFieldProps {
  placeholder: string;
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: { [key: string]: string } | null;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  handleChange,
  error,
}) => {
  const ErrorStyles = {
    button: {
      borderColor: error ? "red" : "",
    },
  };

  return (
    <>
      {error && (
        <label className="text-red font-onest text-md">{error.message}</label>
      )}
      <div
        style={ErrorStyles.button}
        className="my-2 focus-within:border-accent-1 text-black bg-transparentFill gap-2  border-2 px-4 lg:py-4 py-2 rounded-xl flex justify-items-center"
      >
        <svg
          className="self-center"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
        >
          <path
            d="M9.66667 6.5C9.66667 7.85001 8.47273 8.94444 7 8.94444C5.52724 8.94444 4.33333 7.85001 4.33333 6.5C4.33333 5.14997 5.52724 4.05556 7 4.05556C8.47273 4.05556 9.66667 5.14997 9.66667 6.5ZM9.66667 6.5V7.41667C9.66667 8.26043 10.4129 8.94444 11.3333 8.94444C12.2538 8.94444 13 8.26043 13 7.41667V6.5C13 3.46244 10.3137 1 7 1C3.68629 1 1 3.46244 1 6.5C1 9.53759 3.68629 12 7 12H9.66667"
            stroke="#00A3FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          className="w-full focus:outline-none text-contentplaceholder-gray-900 font-onest font-normal text-content bg-transparentFill"
          name="email"
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputField;
