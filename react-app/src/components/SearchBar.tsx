/**
 * SearchBar component for searching by username.
 *
 * @returns {JSX.Element} A JSX element representing the search bar.
 */
function SearchBar() {
  return (
    <div className="search-bar">
      <div>
        <input
          id="search"
          className="search"
          type="text"
          placeholder="Search by username"
        />
        <label htmlFor="search" className="standings">
          Competition Standings
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
