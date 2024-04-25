import React from "react";

function SearchBar() {
  return (
    <div className="searchbar">
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
