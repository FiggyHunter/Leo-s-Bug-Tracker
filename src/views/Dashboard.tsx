import DashboardContent from "@/components/dashboard/DashboardContent";
import Navigation from "@/components/shared/Navigation";
import { useCustomStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { jwt } = useCustomStore();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const token = useJwt(jwt) || null; // Directly use the token

  console.log(token);

  useEffect(() => {
    if (token.isExpired) {
      navigate("/login");
      return;
    }
    if (token.decodedToken !== null) {
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
    }
  }, [token, navigate]);

  return (
    <div className="h-my-screen grid custom-rows-2 grid-cols-1">
      <header>
        <Navigation avatar={`/${user?.Avatar}`} />
      </header>
      <main className="self-center mb-12 w-10/12 mx-auto">
        {!token.isExpired && <DashboardContent userName={user?.Name} />}
      </main>
    </div>
  );
};

export default Dashboard;
