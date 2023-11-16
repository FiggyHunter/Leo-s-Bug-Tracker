import { useState } from "react";
import { LoginErrorData, LoginFormData } from "@/types/LoginForm";
import loginValidation from "@/utils/validators/loginValidation";
import logInUser from "@/api/login/loginUser";
import { useCustomStore } from "@/store/useStore";

const useLogin = () => {
  const { setJwt } = useCustomStore();
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
      const token = await logInUser(loginFormData);
      console.log(token.data);
      setJwt(token.data);
      navigate("/dashboard");
    } catch (e) {
      if (e.message === "Incorrect Credentials")
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
