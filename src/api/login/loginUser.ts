import { LoginFormData } from "@/types/LoginForm";
import Axios from "axios";

const logInUser = async (userData: LoginFormData) => {
  const uri = import.meta.env.VITE_AUTH_ENDPOINT + "login";
  try {
    const response = await Axios.post(uri, userData);
    return response;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export default logInUser;
