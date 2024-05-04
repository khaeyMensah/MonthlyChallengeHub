import Sidebar from "../components/SideBar";
import Table from "../components/CompetitionTable";
import SearchBar from "../components/SearchBar";
import CompetitionSummary from "../components/CompetitionSummary";
import Pagination from "../components/Pagination";
import NavHeading from "../components/NavHeading";

function JanuaryPage() {
  return (
    <div className="JanuaryPage">
      <Sidebar />

      <div>
        <NavHeading />
      </div>

      <div className="details-content">
        <CompetitionSummary monthText="JAN" />

        <SearchBar />

        <Table />

        <Pagination />
      </div>
    </div>
  );
}

export default JanuaryPage;
