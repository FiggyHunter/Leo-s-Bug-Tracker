interface InputFieldProps {
  placeholder: string;
  name: string;
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: null | string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  type,
  handleChange,
  error,
  value,
}) => {
  const ErrorStyles = {
    button: {
      borderColor: error ? "border-red" : "",
    },
  };

  return (
    <>
      {error && <label className="text-red font-onest text-md">{error}</label>}
      <div
        className={`my-2 focus-within:border-accent-1 text-black bg-transparentFill gap-2  border-2 px-4 lg:py-4 py-2 rounded-xl flex justify-items-center ${ErrorStyles.button.borderColor}`}
      >
        {name === "email" && <img src="/mail.svg" alt="email icon" />}
        {(name === "password" || name === "repeatPassword") && (
          <img src="/lock.svg" alt="password icon" />
        )}
        <input
          className="w-full focus:outline-none text-contentplaceholder-gray-900 font-onest font-normal text-content bg-transparentFill"
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          value={value}
        />
      </div>
    </>
  );
};

export default InputField;
