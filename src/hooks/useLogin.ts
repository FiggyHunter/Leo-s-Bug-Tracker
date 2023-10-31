import { useState } from "react";

const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: null, password: null });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validation = () => {
    // validation logic:
    // email: OK

    // password: empty
    setErrors((prevPasswords) => {
      return { ...prevPasswords, password: { message: "Empty password" } };
    });
  };

  const submitLogin = (
    e: React.ChangeEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e.preventDefault();
    validation();
    console.log("Logged in");
  };

  return {
    formData,
    handleInputChange,
    submitLogin,
    errors,
  };
};

export default useLogin;
