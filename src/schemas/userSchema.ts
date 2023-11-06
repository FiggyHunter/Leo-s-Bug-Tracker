import { object, string, ref } from "yup";

const userRegisterSchema = object({
  email: string()
    .required("No email provided.")
    .email("Email needs to be in the correct format!")
    .min(5, "Email is too short - minimum of 5 charachters."),
  password: string()
    .required("No password provided.")
    .min(8, "Password is too short - minimum of 8 charachters."),
  repeatPassword: string()
    .required("You must confirm your password.")
    .oneOf([ref("password")], "Passwords must match."),
});
const userLoginSchema = object({
  email: string()
    .required("No email provided.")
    .email("Email needs to be in the correct format!")
    .min(5, "Email is too short - minimum of 5 charachters."),
  password: string()
    .required("No password provided.")
    .min(8, "Password is too short - minimum of 8 charachters."),
});

export { userRegisterSchema, userLoginSchema };
