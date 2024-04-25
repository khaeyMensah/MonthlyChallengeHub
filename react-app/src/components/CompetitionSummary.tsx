import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faUserAlt,
  faCalendarAlt,
  faAward,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function CompetitionSummary() {
  return (
    <div className="competition-summary">
      <table className="summary-table">
        <tbody>
          <tr>
            <td rowSpan={5}>
              <h1 className="month-header">
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                Jan
              </h1>
            </td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faUserAlt} className="icon" />
              <span>Winner:</span>
            </td>{" "}
            <td className="table-row3 table-item">Obeng Sika</td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <span>Date:</span>
            </td>{" "}
            <td className="table-row3 table-item">January, 2nd 22024</td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faAward} className="icon" />
              <span>Reward:</span>
            </td>{" "}
            <td className="table-row3 table-item">
              $1,000 in cash prize + Challenge accounts
            </td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <span>Number of Contestants:</span>
            </td>{" "}
            <td className="table-row3 table-item">20,546</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompetitionSummary;
