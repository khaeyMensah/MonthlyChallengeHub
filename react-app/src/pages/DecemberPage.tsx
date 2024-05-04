import Sidebar from "../components/SideBar";
import Table from "../components/CompetitionTable";
import SearchBar from "../components/SearchBar";
import CompetitionSummary from "../components/CompetitionSummary";
import Pagination from "../components/Pagination";
import NavHeading from "../components/NavHeading";

function DecemberPage() {
  return (
    <div className="DecemberPage">
      <Sidebar />

      <div>
        <NavHeading />
      </div>

      <div className="details-content">
        <CompetitionSummary monthText="DEC" />

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

export default DecemberPage;
