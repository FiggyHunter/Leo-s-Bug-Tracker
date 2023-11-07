import registerValidation from "@/utils/validators/registerValidation";
import { useState } from "react";
import { RegisterErrorData, RegisterFormData } from "@/types/RegisterForm";
import registerUser from "@/api/register/registerUser";

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

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await registerValidation(registerFormData, setRegisterErrors);
      await registerUser(
        {
          email: registerFormData.email,
          password: registerFormData.password,
        },
        setRegisterErrors
      );
    } catch (error) {
      console.log(error);
    }

    return;
  };

  return {
    registerFormData,
    handleInputChange,
    registerErrors,
    handleRegister,
  };
};

export default useRegister;
