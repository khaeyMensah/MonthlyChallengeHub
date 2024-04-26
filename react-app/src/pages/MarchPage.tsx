import Sidebar from "../components/SideBar";
import Table from "../components/CompetitionTable";
import SearchBar from "../components/SearchBar";
import CompetitionSummary from "../components/CompetitionSummary";
import Pagination from "../components/Pagination";
import NavHeading from "../components/NavHeading";

function MarchPage() {
  return (
    <div className="MarchPage">
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

export default MarchPage;
