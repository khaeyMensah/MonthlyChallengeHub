import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";

const Card = ({ month, prize, contestants }) => {
  return (
    <div className="card">
      <ol>
        <li>
          <div className="icon">
            <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
            <span className="competition-month">{month} Competition</span>
          </div>
          <ul>
            <li>
              <p className="prize">{prize}</p>
            </li>
            <li>
              <div className="icon">
                <FontAwesomeIcon icon={faUsers} className="groups-icon" />
                <span className="contestants">{contestants} Contestants</span>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Card;
