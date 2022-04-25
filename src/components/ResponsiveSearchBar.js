import { useFilter } from '../contexts/filter-context';

function ResponsiveSearchBar() {
  const { searchValue, setSearchValue, searchedVideo } = useFilter();

  const handleRecipeInput = e => {
    setSearchValue(e.target.value);
    searchedVideo(searchValue);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleRecipeInput}
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
