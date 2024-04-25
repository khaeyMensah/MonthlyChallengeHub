import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

function NavHeading() {
  return (
    <div className="nav-home">
      <div className="line"></div>

      <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
      <span className="nav-text">Competition</span>
    </div>
  );
}

export default NavHeading;
