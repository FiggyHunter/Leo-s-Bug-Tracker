import DashboardContent from "@/components/dashboard/DashboardContent";
import Navigation from "@/components/shared/Navigation";
import useAuthToken from "@/hooks/useAuthToken";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { handleTokenCheck, userId, user, token } = useAuthToken();
  const navigate = useNavigate();
  const fetchData = async () => {
    await handleTokenCheck();
  };

  useEffect(() => {
    fetchData();
  }, [userId, user, token]);
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
