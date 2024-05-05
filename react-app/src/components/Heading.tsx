import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

/**
 * Component for displaying the heading of the competition section.
 * @returns {JSX.Element} Heading component.
 */
function Heading() {
  return (
    <>
      {/* Horizontal line separator */}
      <div className="heading-line"></div>
      <div className="heading-container">
        <FontAwesomeIcon icon={faTrophy} className="heading-trophy-icon" />
        <span className="heading-text">Competition</span>
      </div>
    </>
  );
}

export default Heading;
