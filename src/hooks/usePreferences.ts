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

  const handlePreferenceUpdate = () => {
    console.log(token.decodedToken);
    const data = { ...userPreference, id: token.decodedToken.sub };
    const uri = import.meta.env.VITE_AUTH_ENDPOINT + "update";
    console.log(data);
    Axios.post(uri, data);
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
  };
};

export default usePreferences;
