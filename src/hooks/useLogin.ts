import { useState } from "react";

import { LoginErrorData, LoginFormData } from "@/types/LoginForm";
import loginValidation from "@/utils/validators/loginValidation";

const useLogin = () => {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState<LoginErrorData>({
    email: null,
    password: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitLogin = (
    e: React.ChangeEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e.preventDefault();
    console.log("Logged in");
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginValidation(loginFormData, setLoginErrors);
  };

  return {
    loginFormData,
    handleInputChange,
    submitLogin,
    loginErrors,
    handleLogin,
  };
};

export default useLogin;
