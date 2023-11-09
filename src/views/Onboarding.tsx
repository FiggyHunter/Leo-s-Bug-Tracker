import Role from "@/components/onboarding/Role";
import Avatar from "@/components/onboarding/Avatar";
import { useJwt } from "react-jwt";
import { useState } from "react";
import ButtonNavigation from "../components/shared/ButtonNavigation";

interface Role {
  roleName: string;
  active: boolean;
}

interface RolesState {
  developer: Role;
  qa: Role;
  generalist: Role;
}
const Onboarding = () => {
  // const tokenDecoded: null = useJwt(localStorage.getItem("token")) || null;
  // console.log(tokenDecoded);

  const [roles, setRoles] = useState<RolesState>({
    developer: { roleName: "Developer", active: true },
    qa: { roleName: "QA Tester", active: false },
    generalist: { roleName: "Generalist", active: false },
  });
  const updateRole = (selectedRoleName: string) => {
    setRoles((prevRoles) => {
      const newRoles = { ...prevRoles };

      // Set all roles to inactive
      Object.keys(newRoles).forEach((role) => {
        newRoles[role as keyof RolesState].active = false;
      });

      // Set the selected role to active
      const roleKey = Object.keys(newRoles).find(
        (key) => newRoles[key as keyof RolesState].roleName === selectedRoleName
      ) as keyof RolesState | undefined;

      if (roleKey) {
        newRoles[roleKey].active = true;
      }

      return newRoles;
    });
  };

  return (
    <main className="grid grid-rows-2 h-my-screen  gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-1 w-5/6 mx-auto cursor-default ">
      <div className="flex flex-col gap-3 lg:h-5/6 lg:self-center ">
        <h1 className="sm:text-center lg:text-left font-onest font-bold w-full text-content mt-2 md:text-3xl">
          SELECT YOUR ROLE
        </h1>
        <section className="flex h-4/6 gap-3">
          <Role
            active={roles.developer.active}
            roleName={roles.developer.roleName}
            setRoles={() => updateRole(roles.developer.roleName)}
          />
          <Role
            active={roles.qa.active}
            roleName={roles.qa.roleName}
            setRoles={() => updateRole(roles.qa.roleName)}
          />
        </section>
        <div className="h-1/2 mt-3 ">
          <Role
            active={roles.generalist.active}
            fullWidth={true}
            roleName={roles.generalist.roleName}
            setRoles={() => updateRole(roles.generalist.roleName)}
          />
        </div>
      </div>
      <div className="flex flex-col h-full gap-3 justify-center">
        <h1 className="sm:text-center lg:text-left lg:hidden font-onest w-full text-content lg:order-2 lg:w-1/3 lg:self-end lg:h-12 place-content-center md:text-3xl">
          SELECT AN AVATAR
        </h1>
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 sm:items-center gap-3 md:grid-cols-4 md:grid-rows-none lg:grid-cols-2 md:grid-flow-dense w-full h-5/6 md:h-1/3 lg:h-2/3 ">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <div className=" my-4 lg:hidden lg:h-12 h-min  lg:order-3 font-onest text-content lg:w-1/3  lg:self-end lg:ml-auto grid place-self-center w-2/4">
          <ButtonNavigation text="GO TO YOUR DASHBOARD" route={"/dashboard"} />
        </div>
        <div className="hidden h-1/6   lg:flex">
          <h1 className="font-onest font-bold w-full text-content lg:order-2 lg:w-2/3 lg:self-end lg:h-12 lg:grid content-center lg:text-2xl text-left">
            SELECT AN AVATAR
          </h1>
          <button className="lg:h-12 lg:order-3 font-onest text-content lg:w-1/3 bg-accent-1 lg:self-end lg:ml-auto grid content-center hover:scale-95 transition-transform duration-250">
            CONTINUE
          </button>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;
