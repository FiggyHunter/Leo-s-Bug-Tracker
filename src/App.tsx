import { BrowserRouter, Routes } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";

const App = () => {
  return (
    <div className="bg-bkg">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
