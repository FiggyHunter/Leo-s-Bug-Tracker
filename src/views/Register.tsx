import InputField from "../components/shared/InputField";
import Button from "../components/shared/Button";
import ButtonNavigation from "../components/shared/ButtonNavigation";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {
    registerFormData,
    handleInputChange,
    registerErrors,
    handleRegister,
  } = useRegister();
  const notify = () =>
    toast(
      `User account ${registerFormData.email} is registered successfully. Proceed to login!`
    );

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
              error={registerErrors.email}
              value={registerFormData.email}
            />
            <InputField
              placeholder={"Can we have your password?"}
              name={"password"}
              type={"password"}
              handleChange={handleInputChange}
              error={registerErrors.password}
              value={registerFormData.password}
            />
            <InputField
              placeholder={"Can you repeat the password?"}
              name={"repeatPassword"}
              type={"password"}
              handleChange={handleInputChange}
              error={registerErrors.repeatPassword}
              value={registerFormData.repeatPassword}
            />
            <Button
              buttonId={"test2"}
              text={"REGISTER"}
              notify={notify}
              handler={handleRegister}
            />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </section>
        <div className="flex gap-4 justify-between items-center">
          <div className="border-t  flex-grow border-content"></div>
          <span className="font-onest text-content ">Have an account?</span>
          <div className="border-t  flex-grow border-content"></div>
        </div>
        <div className="text-center">
          <ButtonNavigation
            styleType={"secondary"}
            text={"LOGIN HERE"}
            route={"/login"}
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

export default Register;
