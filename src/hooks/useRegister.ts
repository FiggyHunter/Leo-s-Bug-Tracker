import registerValidation from "@/utils/validators/registerValidation";
import { useState } from "react";
import { RegisterErrorData, RegisterFormData } from "@/types/RegisterForm";
import registerUser from "@/api/register/registerUser";
import { useButtonLoadingStore } from "@/store/useButtonLoadingStore";

const useRegister = () => {
  const { setButtonLoading } = useButtonLoadingStore();
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

  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement>,
    navigate: Function,
    buttonId: String
  ) => {
    e.preventDefault();
    try {
      setButtonLoading(buttonId, true);
      await registerValidation(registerFormData, setRegisterErrors);
      await registerUser(
        {
          email: registerFormData.email,
          password: registerFormData.password,
        },
        setRegisterErrors
      );
      setButtonLoading(buttonId, false);
      setRegisterFormData({ email: "", password: "", repeatPassword: "" });
    } catch (error) {
      setButtonLoading(buttonId, false);
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
