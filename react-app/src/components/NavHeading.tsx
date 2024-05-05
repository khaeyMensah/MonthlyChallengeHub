import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

/**
 * Component for displaying the navigation heading with a back button.
 * @returns {JSX.Element} Navigation heading component.
 */
function NavHeading() {
  return (
    <>
      {/* Horizontal line separator */}
      <div className="heading-line"></div>
      <div className="nav-home">
        <Link
          to="/"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          {/* Arrow icon for back navigation */}
          <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
          <span className="nav-text">Competition</span>
        </Link>
      </div>
    </>
  );
}

export default NavHeading;
