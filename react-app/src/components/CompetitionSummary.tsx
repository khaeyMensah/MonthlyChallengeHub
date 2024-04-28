import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCalendarAlt,
  faAward,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function CompetitionSummary() {
  return (
    <div className="competition-summary">
      <table className="summary-table ">
        <tbody>
          <tr>
            <td rowSpan={5}>
              <h1 className="month-header">
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                JAN
              </h1>
              <p className="competition-text">Competition</p>
            </td>
          </tr>
          <tr>
            <td className="summary-label ">
              <FontAwesomeIcon icon={faTrophy} className="icon-1" />
              <span>Winner:</span>
            </td>
            <td className="table-row3 table-item">Obeng Sika</td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon-2" />
              <span>Date:</span>
            </td>
            <td className="table-row3 table-item">January, 2nd 22024</td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faAward} className="icon-3" />
              <span>Reward:</span>
            </td>
            <td className="table-row3 table-item">
              $1,000 in cash prize + Challenge accounts
            </td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faUsers} className="icon-4" />
              <span>Number of Contestants:</span>
            </td>
            <td className="table-row3 table-item">20,546</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompetitionSummary;
