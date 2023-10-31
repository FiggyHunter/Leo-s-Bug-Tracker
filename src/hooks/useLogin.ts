import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

type LoginErrorData = {
  email: null | { message: string };
  password: null | { message: string };
};

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

  const validation = () => {
    // validation logic:
    // email: OK

    // password: empty
    setLoginErrors((prevPasswords) => {
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
    loginFormData,
    handleInputChange,
    submitLogin,
    loginErrors,
  };
};

export default useLogin;
