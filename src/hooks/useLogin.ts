import { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const submitLogin = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Logged in!");
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    submitLogin,
  };
};

export default useLogin;
