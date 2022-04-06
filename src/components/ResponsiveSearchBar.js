import React from 'react';

function ResponsiveSearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input t-c-1"
        placeholder="Search..."
        aria-label="Search"
      />
      <button className="search-bar__submit" aria-label="submit search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export { ResponsiveSearchBar };
