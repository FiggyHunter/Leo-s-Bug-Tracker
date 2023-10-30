import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login.tsx";
import BugsDashboard from "./views/BugsDashboard.tsx";

const App = () => {
  return (
    <div className="bg-bkg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route
            path="/hello"
            element={<div className="text-7xl">Vozdrica</div>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/bugs-overview" element={<BugsDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
