import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function Heading() {
  return (
    <div className="my-heading-container">
      <FontAwesomeIcon icon={faTrophy} className="heading-trophy-icon" />
      <span className="heading-text">Competition</span>
    </div>
  );
}

export default Heading;
