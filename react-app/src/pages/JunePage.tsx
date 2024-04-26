import Sidebar from "../components/SideBar";
import Table from "../components/CompetitionTable";
import SearchBar from "../components/SearchBar";
import CompetitionSummary from "../components/CompetitionSummary";
import Pagination from "../components/Pagination";
import NavHeading from "../components/NavHeading";

function JunePage() {
  return (
    <div className="JunePage">
      <Sidebar />

      <div>
        <NavHeading />
      </div>

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

export default JunePage;
