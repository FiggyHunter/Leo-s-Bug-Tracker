import { onBoardingName } from "@/schemas/userSchema.ts";
import { ValidationError } from "yup";

export const validateName = async (
  preferedName: String,
  setErrors: React.Dispatch<React.SetStateAction<string>>
) => {
  setErrors("");
  try {
    await onBoardingName.validate(preferedName, { abortEarly: false });
  } catch (errors) {
    if (errors instanceof ValidationError)
      errors.inner.forEach((error) => {
        console.log(error.message);
        setErrors(error.message);
        throw new Error(error.message);
      });
  }
};
