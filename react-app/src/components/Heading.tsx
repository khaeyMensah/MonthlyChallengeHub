import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
// import "./Heading.css"; // Import the CSS file

function Heading() {
  return (
    <div className="heading-container">
      <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
      <span className="heading-text">Competition</span>
    </div>
  );
}

export default Heading;
