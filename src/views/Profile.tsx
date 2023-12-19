import ProfileContent from "@/components/profile/ProfileContent";
import Navigation from "@/components/shared/Navigation";
import { useCustomStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import "@/styles/grid.css";

const Profile = () => {
  const { jwt } = useCustomStore();
  const [user, setUser] = useState({});
  const token = useJwt(jwt) || null;
  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    // Validate the jwt value obtained from the store
    if (!jwt) {
      navigate("/login");
      return;
    }

    if (token.isExpired) {
      // Implement token refresh or logout if expired
      navigate("/login");
      return;
    }

    if (token.decodedToken) {
      // Additional checks for decoded token properties
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

      // Set user and user ID
      setUser(token.decodedToken);
    }
  }, [token.decodedToken]);

  return (
    <div className="h-my-screen grid  grid-rows-custom">
      <header className="h-fit">
        <Navigation navigate={navigate} avatar={`/${user?.Avatar}`} />
      </header>

      <ProfileContent name={token?.decodedToken?.Name} />
    </div>
  );
};

export default Profile;
