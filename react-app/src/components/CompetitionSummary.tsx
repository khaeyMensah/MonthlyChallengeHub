import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCalendarAlt,
  faAward,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Props for the CompetitionSummary component.
 */
type MonthProps = {
  monthText: string;
};

/**
 * Component displaying a summary of the competition for a specific month.
 * @param {MonthProps} props - The props containing the month text.
 * @returns {JSX.Element} CompetitionSummary component.
 */
const CompetitionSummary = ({ monthText }: MonthProps) => {
  const competitionClassName = `${monthText}-comp-text`;
  const trophyIconClassName = `${monthText}-trophyIcon`;
  return (
    <div className="competition-summary">
      <table className="summary-table ">
        <tbody>
          <tr>
            <td rowSpan={5}>
              <h1 className="month-header">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className={trophyIconClassName}
                />
                {monthText}
              </h1>
              <p className={competitionClassName}>Competition</p>
            </td>
          </tr>
          <tr>
            <td className="summary-label ">
              <FontAwesomeIcon icon={faTrophy} className="icon-1" />
              <span>Winner:</span>
            </td>
            <td className="table-item col3">Obeng Sika</td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon-2" />
              <span>Date:</span>
            </td>
            <td className="table-item col3">January, 2nd 22024</td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faAward} className="icon-3" />
              <span>Reward:</span>
            </td>
            <td className="table-item col3">
              $1,000 in cash prize + Challenge accounts
            </td>
          </tr>
          <tr>
            <td className="summary-label">
              <FontAwesomeIcon icon={faUsers} className="icon-4" />
              <span>Number of Contestants:</span>
            </td>
            <td className="table-item col3">20,546</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompetitionSummary;
