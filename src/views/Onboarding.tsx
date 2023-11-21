import Role from "@/components/onboarding/Role";
import Avatar from "@/components/onboarding/Avatar";
import { useEffect } from "react";
import usePreferences from "@/hooks/usePreferences";
import { AvatarsState, RolesState } from "@/types/Preferences";
import Button from "@/components/shared/Button";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const {
    avatar,
    roles,
    setUserPreference,
    findActiveAvatar,
    findActiveRole,
    setAvatar,
    setRoles,
    handlePreferenceUpdate,
    userPreferenceErrors,
  } = usePreferences();

  const navigate = useNavigate();

  useEffect(() => {
    setUserPreference((prevPreference: any) => {
      return {
        ...prevPreference,
        role: findActiveRole(roles),
        avatar: findActiveAvatar(avatar),
      };
    });
  }, [avatar, roles]);

  const updateAvatar = (imageName: string) => {
    setAvatar((prevAvatars: AvatarsState) => {
      const updatedAvatars = Object.keys(prevAvatars).reduce<AvatarsState>(
        (acc, key) => {
          acc[key as keyof AvatarsState] = {
            ...prevAvatars[key as keyof AvatarsState],
            active: key === imageName,
          };
          return acc;
        },
        {} as AvatarsState
      );

      return updatedAvatars;
    });
  };

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
    <main className="grid grid-rows-2 md:h-my-screen lg:h-my-screen   gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-1 w-5/6 mx-auto cursor-default content-between ">
      <div className="flex flex-col gap-3 lg:h-5/6 lg:self-center ">
        <h1
          className={`${
            userPreferenceErrors.role === true ? "text-red" : "text-content"
          } text-xl sm:text-center lg:text-left font-onest font-bold w-full text-content mt-2 md:text-3xl`}
        >
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
      <div className="flex flex-col h-5/6 lg:my-auto gap-3 ">
        <h1
          className={`${
            userPreferenceErrors.avatar === true ? "text-red" : "text-content"
          } text-xl sm:text-center lg:text-left lg:hidden font-onest w-full text-content lg:order-2 lg:w-1/3 lg:self-end lg:h-12 place-content-center md:text-3xl`}
        >
          SELECT AN AVATAR
        </h1>
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 sm:items-center gap-3 md:grid-cols-4 md:grid-rows-none lg:grid-cols-2 md:grid-flow-dense w-full md:h-1/3 lg:h-full lg:custom-rows lg:place-content-center place-items-center md:overflow-hidden ">
          {avatar &&
            Object.values(avatar).map((avatar) => (
              <Avatar
                key={avatar.label}
                active={avatar.active}
                setter={() => updateAvatar(avatar.label)}
                imageUrl={avatar.imageUrl}
              />
            ))}
        </div>
        <div className=" my-4 lg:hidden  h-min  lg:order-3 font-onest  lg:w-1/3  lg:ml-auto grid place-self-center w-2/4">
          <Button
            text="CONTINUE"
            handler={() => handlePreferenceUpdate(navigate)}
          />
        </div>
        <div className="hidden h-1/6 lg:flex px-5">
          <h1
            className={`${
              userPreferenceErrors.avatar === true ? "text-red" : "text-content"
            } font-onest font-bold w-full text-content lg:order-2 lg:w-2/3 lg:self-end lg:h-12 lg:grid content-center lg:text-2xl text-left`}
          >
            SELECT AN AVATAR
          </h1>
          <div className="lg:h-12 lg:order-3   lg:w-1/3  lg:self-end lg:ml-auto grid content-center hover:scale-95 transition-transform duration-250 ">
            <Button
              text="CONTINUE"
              handler={() => handlePreferenceUpdate(navigate)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;
