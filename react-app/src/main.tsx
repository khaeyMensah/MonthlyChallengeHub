import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import JanuaryPage from "./pages/JanuaryPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./CompetitionSummary.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
