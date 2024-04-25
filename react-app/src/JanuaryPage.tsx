// import React from "react";
import Sidebar from "./components/SideBar";
import Table from "./components/CompetitionTable";
import SearchBar from "./components/SearchBar";
import NavButtons from "./components/NavButtons";
import CompetitionSummary from "./components/CompetitionSummary";

function JanuaryPage() {
  return (
    <div className="JanuaryPage">
      <Sidebar />
      <div className="main-content">
        <CompetitionSummary />
        <SearchBar />
        <Table />
        <NavButtons />
      </div>
    </div>
  );
}

export default JanuaryPage;
