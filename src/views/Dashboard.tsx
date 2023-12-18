import DashboardContent from "@/components/dashboard/DashboardContent";
import Navigation from "@/components/shared/Navigation";
import { useCustomStore } from "@/store/useStore";
import { useIdStore } from "@/store/useUserId";
import { useCallback, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { jwt } = useCustomStore();
  const { userId, setUserId } = useIdStore();
  const navigate = useNavigate();
  const token = useJwt(jwt);
  const [user, setUser] = useState({});

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
      setUserId(token.decodedToken.sub);
    }
  }, [token.decodedToken, userId]);
  return (
    <div className="h-my-screen grid custom-rows-2 grid-cols-1">
      <header>
        <Navigation navigate={navigate} avatar={`/${user?.Avatar}`} />
      </header>
      <main className="self-center mb-12 w-10/12 mx-auto">
        {!token.isExpired && <DashboardContent userName={user?.Name} />}
      </main>
    </div>
  );
};

export default Dashboard;
