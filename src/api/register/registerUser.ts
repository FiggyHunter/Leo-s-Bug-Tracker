import {
  RegisterErrorData,
  RegisterFormDataWithoutRepeat,
} from "@/types/RegisterForm";
import Axios from "axios";

const registerUser = async (
  formData: RegisterFormDataWithoutRepeat,
  setRegisterError: Function
) => {
  const uri = import.meta.env.VITE_AUTH_ENDPOINT;
  try {
    await Axios.post(`${uri}register`, formData);
  } catch (error: any) {
    if (error.response.data === "User already exists!")
      setRegisterError((prevData: RegisterErrorData) => {
        return { ...prevData, email: "Email Already Exists" };
      });
    throw new Error(error.message);
  }
};
export default registerUser;
