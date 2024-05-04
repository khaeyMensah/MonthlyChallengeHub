import Sidebar from "../components/SideBar";
import Table from "../components/CompetitionTable";
import SearchBar from "../components/SearchBar";
import CompetitionSummary from "../components/CompetitionSummary";
import Pagination from "../components/Pagination";
import NavHeading from "../components/NavHeading";

function NovemberPage() {
  return (
    <div className="NovemberPage">
      <Sidebar />

      <div>
        <NavHeading />
      </div>

      <div className="details-content">
        <CompetitionSummary monthText="NOV" />

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

export default NovemberPage;
