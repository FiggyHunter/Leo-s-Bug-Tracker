import { useCustomStore } from "@/store/useStore";
import { useIdStore } from "@/store/useUserId";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const useAuthToken = () => {
  const { jwt } = useCustomStore();
  const [user, setUser] = useState({});
  const token = useJwt(jwt) || null;
  const navigate = useNavigate();
  const { userId, setUserId } = useIdStore();
  const handleTokenCheck = async () => {
    if (!jwt) {
      navigate("/login");
      return;
    }

    if (token.isExpired) {
      navigate("/login");
      return;
    }

    if (token.decodedToken) {
      if (
        token.decodedToken.Role === "unset" ||
        token.decodedToken.Avatar === "unset"
      ) {
        navigate("/onboarding");
        return;
      }

      if (token.decodedToken.Name === "unset") {
        navigate("/onboarding-name");
        return;
      }
      setUser(token.decodedToken);
      setUserId(token.decodedToken.sub);
    }
  };

  return { handleTokenCheck, userId, user, token };
};

export default useAuthToken;
