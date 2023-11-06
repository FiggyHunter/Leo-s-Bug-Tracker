import { LoginFormData, LoginErrorData } from "@/types/LoginForm";
import { userLoginSchema } from "@/schemas/userSchema";
import { ValidationError } from "yup";

const loginValidation = async (
  loginFormData: LoginFormData,
  setLoginErrors: React.Dispatch<React.SetStateAction<LoginErrorData>>
) => {
  const handleErrorRegistration = (errorField: string, error: string) => {
    setLoginErrors((prevData) => ({ ...prevData, [errorField]: error }));
  };
  setLoginErrors({ email: null, password: null });

  try {
    await userLoginSchema.validate(loginFormData, {
      abortEarly: false,
    });
  } catch (errors) {
    if (errors instanceof ValidationError) {
      errors.inner.forEach((error) => {
        if (error.path) handleErrorRegistration(error.path, error.message);
      });
    }
  }
  return;
};

export default loginValidation;
