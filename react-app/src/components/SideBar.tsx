// import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartBar,
  faClipboardList,
  faDownload,
  faFileInvoiceDollar,
  faFileSignature,
  faHourglassStart,
  faJournalWhills,
  faTrophy,
  faUserCog,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <aside id="kt_app_sidebar" className="my-sidebar">
      <div className="my-logo">
        <a href="/">
          <img src="./src/assets/image.png" alt="logo" />
          <span className="Emma">Emmanuel</span>
        </a>
      </div>
      <div className="app-sidebar-menu">
        <div id="kt-app-sidebar-menu-scroll">
          <div className="my-links">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faChartBar} className="side-icons" />
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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
