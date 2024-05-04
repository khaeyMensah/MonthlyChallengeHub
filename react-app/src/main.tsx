import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";
import "./css/details.css";
import "./css/indexMobile.css";
import "./css/detailsMobile.css";
import "./css/pages.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JanuaryPage from "./pages/JanuaryPage";
import AprilPage from "./pages/AprilPage";
import AugustPage from "./pages/AugustPage";
import DecemberPage from "./pages/DecemberPage";
import FebruaryPage from "./pages/FebruaryPage";
import JulyPage from "./pages/JulyPage";
import JunePage from "./pages/JunePage";
import MarchPage from "./pages/MarchPage";
import MayPage from "./pages/MayPage";
import NovemberPage from "./pages/NovemberPage";
import OctoberPage from "./pages/OctoberPage";
import SeptemberPage from "./pages/SeptemberPage";
library.add(fas);

ReactDOM.render(
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
  </Router>,
  document.getElementById("root")
);
