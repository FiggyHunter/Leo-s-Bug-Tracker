import InputField from "../components/login/InputField.tsx";
import useLogin from "../hooks/useLogin.ts";
import Button from "../components/login/Button";
import ButtonNavigation from "./ButtonNavigation.tsx";

const Login = () => {
  const { loginFormData, handleInputChange, submitLogin, loginErrors } =
    useLogin();

  // const navigate = useNavigate();

  // const login = async () => {
  //   const result = await Axios.post("http://localhost:4000/auth/login", {
  //     email: email,
  //     password: password,
  //   });
  //   if (result?.data) {
  //     const { token } = result.data;
  //     localStorage.setItem("token", token);
  //     navigate("/bugs-overview");
  //   }
  // };

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

  // Theme changer:
  // const changeTheme = (theme) => {
  //   document.documentElement.dataset.theme = theme;
  // };

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
            <Button text={"LOGIN"} handler={submitLogin} />
          </form>
        </section>
        <div className="flex gap-4 justify-between items-center">
          <div className="border-t  flex-grow border-content"></div>
          <span className="font-onest text-content ">
            Don't have an account?
          </span>
          <div className="border-t  flex-grow border-content"></div>
        </div>
        <ButtonNavigation text={"REGISTER HERE"} route={"/register"} />
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
