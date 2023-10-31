import { useState } from "react";
type RegisterFormData = {
  email: string;
  password: string;
  repeatPassword: string;
};

type RegisterErrorData = {
  email: null | { message: string };
  password: null | { message: string };
  repeatPassword: null | { message: string };
};

const useRegister = () => {
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [registerErrors, setRegisterErrors] = useState<RegisterErrorData>({
    email: null,
    password: null,
    repeatPassword: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return {
    registerFormData,
    handleInputChange,
    registerErrors,
  };
};

export default useRegister;
