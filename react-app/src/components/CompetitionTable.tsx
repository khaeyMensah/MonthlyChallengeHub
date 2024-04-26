function CompetitionTable() {
  return (
    <div className="competition-table">
      <table className="my-table">
        <thead>
          <tr>
            <th>RANK</th>
            <th>NICKNAME</th>
            <th>RETURN %</th>
            <th>BACK FROM FIRST PLACE</th>
            <th>PRICE</th>
            <th>COUNTRY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Obeng Sika</td>
            <td>57.32</td>
            <td>-</td>
            <td>$500 Cash + $200,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/cn.webp"
                alt="China Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>El Chapo</td>
            <td>45.36</td>
            <td>3.05</td>
            <td>$200 Cash + $100,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/de.webp"
                alt="Germany Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>John Doe</td>
            <td>65.78</td>
            <td>5.00</td>
            <td>$300 Cash + $150,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/gh.webp"
                alt="Ghana Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Aspiring</td>
            <td>45.36</td>
            <td>7.55</td>
            <td>$200 Cash + $100,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/in.webp"
                alt="India Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Samed</td>
            <td>57.32</td>
            <td>6.88</td>
            <td>$100 Cash + $100,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/ke.webp"
                alt="Kenya Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Daniel</td>
            <td>45.36</td>
            <td>7.55</td>
            <td>$100,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/md.webp"
                alt="Moldova Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Vyrus</td>
            <td>57.32</td>
            <td>6.88</td>
            <td>$10,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/ng.webp"
                alt="Nigeria Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Skylington</td>
            <td>45.36</td>
            <td>7.55</td>
            <td>$10,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/pt.webp"
                alt="Portugal Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Kwakye</td>
            <td>57.32</td>
            <td>6.88</td>
            <td>$10,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/us.webp"
                alt="USA Flag"
                className="flag-img"
              />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Kepler</td>
            <td>45.36</td>
            <td>7.55</td>
            <td>$10,000 Challenge Account</td>
            <td>
              <img
                src="./src/assets/vn.webp"
                alt="Vietnam Flag"
                className="flag-img"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompetitionTable;
