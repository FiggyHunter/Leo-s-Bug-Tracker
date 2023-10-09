import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import picture from "../images/slika123.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    const result = await Axios.post("http://localhost:4000/auth/login", {
      email: email,
      password: password,
    });
    if (result?.data) {
      const { token } = result.data;
      localStorage.setItem("token", token);
      navigate("/bugs-overview");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className={"z-0 grid place-content-center h-screen relative custom-blur "}
      style={{
        backgroundImage: `url(${picture})`,
      }}
    >
      <Card className={"filter-none z-30"} sx={{ zIndex: 10, minWidth: 400 }}>
        <CardContent className={" w-full grid gap-5"}>
          <h1 className={"text-center text-2xl text-blue-400 font-black"}>
            Bug tracker application
          </h1>
          <TextField
            className={"block w-full"}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            className={"block w-full"}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            type={"password"}
          />
        </CardContent>
        <CardActions className={"w-full"}>
          <Button
            onClick={login}
            className={"block w-full text-center"}
            size="small"
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
