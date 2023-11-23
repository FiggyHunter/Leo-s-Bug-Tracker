import { useState } from "react";
import Button from "@/components/shared/Button";
import { validateName } from "@/utils/validators/validateName";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useCustomStore } from "@/store/useStore";
import { useJwt } from "react-jwt";
import { useButtonLoadingStore } from "@/store/useButtonLoadingStore";

const OnboardingName = () => {
  const { jwt, setJwt } = useCustomStore();
  const token = useJwt(jwt) || null;   
  const {setButtonLoading} = useButtonLoadingStore();
  const navigate = useNavigate();
  const [namePreference, setNamePreference] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNamePreference(event.target.value);
  };
  const [nameError, setNameError] = useState("");

  const verifyName = async (
    e: React.MouseEvent<HTMLButtonElement>,
    namePreference: String
  ) => {
    const uri = import.meta.env.VITE_AUTH_ENDPOINT + "name";
    e.preventDefault();
    try {
      setButtonLoading(true);
      await validateName(namePreference, setNameError);
      const fetchedToken = await Axios.post(uri, {
        Id: token.decodedToken.sub,
        Name: namePreference,
      });
      await setJwt(fetchedToken.data);
      await navigate("/dashboard");
      setButtonLoading(false);
    } catch (error) {
      console.log(error);
      setButtonLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1  justify-items-center h-screen w-screen">
      <form
        onSubmit={(e) => verifyName(e, namePreference)}
        className="grid self-center"
      >
        <input
          className="text-xl lg:text-5xl text-center text-white placeholder-gray-400 font-onest font-bold bg-transparent border-b-2 border-b-white focus:border-b-accent-1 focus:outline-none"
          value={namePreference} // Bind the input value to your state
          onChange={handleChange}
          type="text"
          placeholder="ENTER YOUR NAME"
          onSubmit={(e) => verifyName(e, namePreference)}
        />
        <label className="font-semibold text-lg lg:text-2xl font-onest text-red text-center mt-4">
          {nameError}
        </label>
        <div className="text-center w-1/2 mx-auto">
          <Button
            text="GO TO YOUR DASHBOARD"
            handler={(e) => verifyName(e, namePreference)}
          />
        </div>
      </form>
    </div>
  );
};

export default OnboardingName;
