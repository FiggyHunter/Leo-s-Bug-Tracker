import { Route, Routes } from "react-router-dom";
import Login from "../views/Login.tsx";
import BugsDashboard from "../views/BugsDashboard.tsx";
import Register from "../views/Register.tsx";
import Onboarding from "@/views/Onboarding.tsx";
import OnboardingName from "@/views/OnboardingName.tsx";
// import PrivateRoute from "../components/PrivateRoute.tsx"; // Assuming you've created a PrivateRoute component

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/hello"
          element={<div className="text-7xl">Vozdrica</div>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="onboarding-name" element={<OnboardingName />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
