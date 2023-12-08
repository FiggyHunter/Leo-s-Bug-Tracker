import InputField from "../components/shared/InputField.tsx";
import useLogin from "../hooks/useLogin.ts";
import Button from "../components/shared/Button.tsx";
import ButtonNavigation from "../components/shared/ButtonNavigation.tsx";
import { useNavigate } from "react-router-dom";
import { useCustomStore } from "@/store/useStore.ts";
import { useJwt } from "react-jwt";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { handleInputChange, loginErrors, handleLogin } = useLogin();
  const { jwt } = useCustomStore();
  const token = useJwt(jwt) || null;
  useEffect(() => {
    if (token.decodedToken && !token.isExpired) {
      navigate("/dashboard");
      return;
    }
  }, [token.decodedToken, navigate]);

  return (
    <main className="lg:grid lg:grid-cols-2 lg:place-items-center flex flex-col h-my-screen justify-center w-75p mx-auto gap-5">
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
              name={"email"}
              type={"email"}
              handleChange={handleInputChange}
              error={loginErrors.email}
            />
            <InputField
              placeholder={"Can we have your password?"}
              name={"password"}
              type={"password"}
              handleChange={handleInputChange}
              error={loginErrors.password}
            />
            <Button
              buttonId={"test1"}
              text={"LOGIN"}
              handler={(e, buttonId) => handleLogin(e, navigate, buttonId)}
            />
          </form>
        </section>
        <div className="flex gap-4 justify-between items-center">
          <div className="border-t  flex-grow border-content"></div>
          <span className="font-onest text-content ">
            Don't have an account?
          </span>
          <div className="border-t  flex-grow border-content"></div>
        </div>
        <div className="text-center">
          <ButtonNavigation
            styleType={"secondary"}
            text={"REGISTER HERE"}
            route={"/register"}
          />
        </div>
      </div>
      <img
        className="sm:order-1 w-4/6 lg:w-full lg:order-2 self-center rounded-3xl"
        src="/bugs-login.png"
        alt=""
        srcSet=""
      />
    </main>
  );
};

export default Login;
