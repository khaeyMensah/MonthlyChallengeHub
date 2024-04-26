import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JanuaryPage from "./pages/JanuaryPage";
import FebruaryPage from "./pages/FebruaryPage";
import MarchPage from "./pages/MarchPage";
import AprilPage from "./pages/AprilPage";
import MayPage from "./pages/MayPage";
import JunePage from "./pages/JunePage";
import JulyPage from "./pages/JulyPage";
import AugustPage from "./pages/AugustPage";
import SeptemberPage from "./pages/SeptemberPage";
import OctoberPage from "./pages/OctoberPage";
import NovemberPage from "./pages/NovemberPage";
import DecemberPage from "./pages/DecemberPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/JanuaryPage" element={<JanuaryPage />} />
        <Route path="/FebruaryPage" element={<FebruaryPage />} />
        <Route path="/MarchPage" element={<MarchPage />} />
        <Route path="/AprilPage" element={<AprilPage />} />
        <Route path="/MayPage" element={<MayPage />} />
        <Route path="/JunePage" element={<JunePage />} />
        <Route path="/JulyPage" element={<JulyPage />} />
        <Route path="/AugustPage" element={<AugustPage />} />
        <Route path="/SeptemberPage" element={<SeptemberPage />} />
        <Route path="/OctoberPage" element={<OctoberPage />} />
        <Route path="/NovemberPage" element={<NovemberPage />} />
        <Route path="/DecemberPage" element={<DecemberPage />} />
      </Routes>
    </Router>
  );
}

export default App;
