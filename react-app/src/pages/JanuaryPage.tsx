// import React from "react";
import Sidebar from "../components/SideBar";
import Table from "../components/CompetitionTable";
import SearchBar from "../components/SearchBar";
import CompetitionSummary from "../components/CompetitionSummary";
import Pagination from "../components/Pagination";

function JanuaryPage() {
  return (
    <div className="JanuaryPage">
      <Sidebar />
      <div className="main-content">
        <CompetitionSummary />

        <div>
          <SearchBar />
        </div>

        <Table />

        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default JanuaryPage;