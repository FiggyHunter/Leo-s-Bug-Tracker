import ProfileContent from "@/components/profile/ProfileContent";
import Navigation from "@/components/shared/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/grid.css";
import useAuthToken from "@/hooks/useAuthToken";

const Profile = () => {
  const { handleTokenCheck, userId, user, token } = useAuthToken();
  const navigate = useNavigate();
  const fetchData = async () => {
    await handleTokenCheck();
  };

  useEffect(() => {
    fetchData();
  }, [userId, user, token]);

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
