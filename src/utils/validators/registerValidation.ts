import { userRegisterSchema } from "@/schemas/userSchema";
import { ValidationError } from "yup";
import { RegisterErrorData, RegisterFormData } from "@/types/RegisterForm";

const registerValidation = async (
  registerFormData: RegisterFormData,
  setRegisterErrors: React.Dispatch<React.SetStateAction<RegisterErrorData>>
) => {
  const handleErrorRegistration = (errorField: string, error: string) => {
    setRegisterErrors((prevData: RegisterErrorData) => ({
      ...prevData,
      [errorField]: error,
    }));
  };

  setRegisterErrors({
    email: null,
    password: null,
    repeatPassword: null,
  });
  try {
    await userRegisterSchema.validate(registerFormData, {
      abortEarly: false,
    });
  } catch (errors) {
    if (errors instanceof ValidationError) {
      errors.inner.forEach((error) => {
        if (error.path) handleErrorRegistration(error.path, error.message);
      });
    }
  }
};
export default registerValidation;
