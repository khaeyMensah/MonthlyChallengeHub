import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

function NavHeading() {
  return (
    <div className="nav-home">
      <div className="line"></div>
      <Link
        to="/"
        className="link-offset-2 link-underline link-underline-opacity-0"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
        <span className="nav-text">Competition</span>
      </Link>
    </div>
  );
}

export default NavHeading;
