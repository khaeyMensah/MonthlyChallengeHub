import { useState } from "react";
import {
  faChartBar,
  faClipboardList,
  faDashboard,
  faDownload,
  faFileInvoiceDollar,
  faFileSignature,
  faHourglassStart,
  faJournalWhills,
  faTrophy,
  faUserCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Sidebar component displaying navigation links and a toggle button for mobile view.
 * @returns {JSX.Element} Sidebar component.
 */
const Sidebar = () => {
  // State to toggle visibility of sidebar menu on mobile view
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);

  /**
   * Toggles the visibility of the sidebar menu on mobile view.
   */
  const toggleMenuBar = () => {
    setIsMenuBarVisible(!isMenuBarVisible);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleMenuBar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <aside id="sidebar" className="sidebar">
        <div className="logo">
          <a href="/">
            <img src="./src/assets/logo.png" alt="logo" />
            <span className="Emma">Emmanuel</span>
          </a>
        </div>
        <div className={`sidebar-menu ${isMenuBarVisible ? "visible" : ""}`}>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faDashboard} className="side-icons" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faChartBar} className="side-icons" />
                <span>Statistics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTrophy} className="side-icons" />
                <span>Leaderboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="side-icons"
                />
                <span>Competition</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFileInvoiceDollar}
                  className="side-icons"
                />
                <span>Certificates</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faDownload} className="side-icons" />
                <span>Downloads</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFileSignature}
                  className="side-icons"
                />
                <span>Affiliate Portal</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faHourglassStart}
                  className="side-icons"
                />
                <span>Forex Market Hours</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faJournalWhills}
                  className="side-icons"
                />
                <span>Journalling Analysis</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUserCog} className="side-icons" />
                <span>Personal Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
