import { useState } from "react";
import { LoginErrorData, LoginFormData } from "@/types/LoginForm";
import loginValidation from "@/utils/validators/loginValidation";
import logInUser from "@/api/login/loginUser";

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

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement>,
    navigate: Function
  ) => {
    try {
      e.preventDefault();
      await loginValidation(loginFormData, setLoginErrors);
      await logInUser(loginFormData);
      navigate("/test");
    } catch (e) {
      if (e.message === "AxiosError: Request failed with status code 401")
        setLoginErrors({
          email: "Invalid creditentials",
          password: "Invalid creditentials",
        });
      console.log(e);
    }
  };

  return {
    loginFormData,
    handleInputChange,
    loginErrors,
    handleLogin,
  };
};

export default useLogin;
