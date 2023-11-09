import { useState } from "react";

import Button from "@/components/shared/Button";
import { validateName } from "@/utils/validators/validateName";

const OnboardingName = () => {
  const [namePreference, setNamePreference] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNamePreference(event.target.value);
  };
  const [nameError, setNameError] = useState("");

  const verifyName = async (
    e: React.MouseEvent<HTMLButtonElement>,
    namePreference: String
  ) => {
    e.preventDefault();
    try {
      await validateName(namePreference, setNameError);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1  content-center justify-items-center h-full w-full">
      <form className="grid">
        <input
          className="text-5xl text-center text-white placeholder-gray-400 font-onest font-bold bg-transparent border-b-2 border-b-white focus:border-b-accent-1 focus:outline-none"
          value={namePreference} // Bind the input value to your state
          onChange={handleChange}
          type="text"
          placeholder="ENTER YOUR NAME"
        />
        <label className="font-semibold text-lg font-onest text-red text-center mt-4">
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