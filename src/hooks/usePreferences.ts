import { useCustomStore } from "@/store/useStore";
import {
  AvatarsState,
  RolesState,
  userPreferenceState,
} from "@/types/Preferences";
import Axios from "axios";
import { useState } from "react";
import { useJwt } from "react-jwt";

const usePreferences = () => {
  const { jwt } = useCustomStore();
  const token = useJwt(jwt) || null;
  const [roles, setRoles] = useState<RolesState>({
    developer: { roleName: "Developer", active: false },
    qa: { roleName: "QA Tester", active: false },
    generalist: { roleName: "Generalist", active: false },
  });

  const [avatar, setAvatar] = useState<AvatarsState>({
    panda: {
      label: "panda",
      imageUrl: "panda.webp",
      active: false,
    },
    owl: {
      label: "owl",
      imageUrl: "owl.webp",
      active: false,
    },
    fox: {
      label: "fox",
      imageUrl: "fox.webp",
      active: false,
    },
    dolphin: {
      label: "dolphin",
      imageUrl: "dolphin.webp",
      active: false,
    },
  });

  const [userPreference, setUserPreference] = useState<userPreferenceState>({
    role: "",
    avatar: "",
  });

  const [userPreferenceErrors, setUserPrefferenceErrors] = useState({
    role: false,
    avatar: false,
  });

  const findActiveRole = (roles: RolesState): string => {
    for (const key in roles) {
      if (roles[key as keyof RolesState].active) {
        return roles[key as keyof RolesState].roleName;
      }
    }
    return "";
  };

  const findActiveAvatar = (avatars: AvatarsState): string => {
    for (const key in avatars) {
      if (avatars[key as keyof AvatarsState].active) {
        return avatars[key as keyof AvatarsState].imageUrl;
      }
    }
    return "";
  };

  const handlePreferenceUpdate = async (navigate) => {
    console.log(token.decodedToken);
    setUserPrefferenceErrors({ avatar: false, role: false });
    if (userPreference.avatar === "") {
      console.log(userPreferenceErrors);
      setUserPrefferenceErrors((prevPreferences) => {
        return { ...prevPreferences, avatar: true };
      });
      return;
    }

    if (userPreference.role === "") {
      setUserPrefferenceErrors((prevPreferences) => {
        return { ...prevPreferences, role: true };
      });
      return;
    }

    try {
      const data = { ...userPreference, id: token.decodedToken.sub };
      const uri = import.meta.env.VITE_AUTH_ENDPOINT + "update";
      console.log(data);
      await Axios.post(uri, data);
      await navigate("/onboarding-name");
    } catch (err) {
      throw new Error();
    }
  };

  return {
    userPreference,
    setUserPreference,
    findActiveRole,
    findActiveAvatar,
    avatar,
    setAvatar,
    roles,
    setRoles,
    handlePreferenceUpdate,
    userPreferenceErrors,
  };
};

export default usePreferences;
