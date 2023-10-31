import React from "react";
import InputField from "../components/login/inputField";
import Button from "../components/login/Button";
import ButtonNavigation from "./ButtonNavigation";
import useLogin from "../hooks/useLogin";

const Register = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    submitLogin,
  } = useLogin();
  return (
    <main className="lg:grid lg:grid-cols-2 lg:place-content-center flex flex-col h-screen justify-center w-75p mx-auto gap-5">
      <div className="sm:order-2 place-self-center lg:w-4/5">
        <h1 className="font-onest font-bold text-accent-1 text-center text-2xl lg:text-5xl">
          LEO'S BUG TRACKER
        </h1>
        <p className="font-onest leading-5 font-thin text-content line text-center text-base w-10/12 mx-auto lg:text-2xl lg:leading-8">
          The view of your bugs doesn’t need to be a bad experience.
        </p>
        <section className="my-4">
          <form>
            <InputField
              placeholder={"What's your email address?"}
              type={"text"}
              handleChange={handleEmailChange}
            />
            <InputField
              placeholder={"Can we have your password?"}
              type={"password"}
              handleChange={handlePasswordChange}
            />{" "}
            <InputField
              placeholder={"Can we have your password?"}
              type={"password"}
              handleChange={handlePasswordChange}
            />
            <Button text={"REGISTER"} handler={submitLogin} />
          </form>
        </section>
        <div className="flex gap-4 justify-between items-center">
          <div className="border-t  flex-grow border-content"></div>
          <span className="font-onest text-content ">
            Already have an account?
          </span>
          <div className="border-t  flex-grow border-content"></div>
        </div>
        <ButtonNavigation text={"LOGIN HERE"} route={"/login"} />
      </div>
      <img
        className="sm:order-1 md:order-2 rounded-3xl"
        src="/bugs-login.png"
        alt=""
        srcSet=""
      />
    </main>
  );
};

export default Register;
