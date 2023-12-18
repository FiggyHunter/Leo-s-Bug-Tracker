import { Route, Routes } from "react-router-dom";
import Login from "../views/Login.tsx";
import Register from "../views/Register.tsx";
import Onboarding from "@/views/Onboarding.tsx";
import OnboardingName from "@/views/OnboardingName.tsx";
import Dashboard from "@/views/Dashboard.tsx";
import Projects from "@/views/Projects.tsx";
import Project from "@/views/Project.tsx";
import Profile from "@/views/Profile.tsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="onboarding-name" element={<OnboardingName />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
