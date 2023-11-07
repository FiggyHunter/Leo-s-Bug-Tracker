import { LoginFormData } from "@/types/LoginForm";
import Axios from "axios";

const logInUser = async (userData: LoginFormData) => {
  const uri = import.meta.env.VITE_AUTH_ENDPOINT + "login";
  try {
    const response = await Axios.post(uri, userData);
    console.log(response);
    if (response?.data) {
      const { token } = response.data;
      localStorage.setItem("token", token);
    }
  } catch (error) {
    if (error.response.data.error === "User not found!") console.log(error);
    throw new Error(error);
  }
};

export default logInUser;
