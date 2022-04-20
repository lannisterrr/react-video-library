import { useEffect } from 'react';
import { useFilter } from '../contexts/filter-context';
import { useData } from '../contexts/data-context';

function ResponsiveSearchBar() {
  const { searchValue, setSearchValue, searchedRecipe } = useFilter();

  useEffect(() => {
    searchedRecipe(searchValue);
  }, [searchValue]);
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        className="search-bar__input t-c-1"
        placeholder="Search..."
        value={searchValue}
        aria-label="Search"
      />
      <button className="search-bar__submit" aria-label="submit search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export { ResponsiveSearchBar };
