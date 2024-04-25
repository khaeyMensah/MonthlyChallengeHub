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
      <table className="summary-table ">
        <tbody>
          <tr>
            <td rowSpan={5}>
              <h1 className="month-header">
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                JAN
              </h1>
              <p className="competition">Competition</p>
            </td>
          </tr>
          <tr>
            <td className="summary-label ">
              <FontAwesomeIcon icon={faTrophy} className="icon-1" />
              <ul>
                <li>
                  <span>Winner:</span>
                </li>
              </ul>
            </td>
            <td className="table-row3 table-item">
              <ul>
                <li>Obeng Sika</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon-2" />
              <ul>
                <li>
                  <span>Date:</span>
                </li>
              </ul>
            </td>
            <td className="table-row3 table-item">
              <ul>
                <li>January, 2nd 22024</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faAward} className="icon-3" />
              <ul>
                <li>
                  <span>Reward:</span>
                </li>
              </ul>
            </td>
            <td className="table-row3 table-item">
              <ul>
                <li>$1,000 in cash prize + Challenge accounts</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="slmmary-label">
              <FontAwesomeIcon icon={faUsers} className="icon-4" />
              <ul>
                <li>
                  <span>Number of Contestants:</span>
                </li>
              </ul>
            </td>
            <td className="table-row3 table-item">
              <ul>
                <li>20,546</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompetitionSummary;
