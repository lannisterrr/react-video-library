import { createContext, useContext, useState } from 'react';
import { useData } from './data-context';
const filterContext = createContext();

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const { dataState } = useData();
  const data = dataState.videos;
  const [searchValue, setSearchValue] = useState('');
  const [finalArray, setFinalArray] = useState(data);
  const searchedVideo = searchValue => {
    const VideosAfterSearch =
      searchValue.length > 1
        ? finalArray.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        : data;
    setFinalArray(VideosAfterSearch);
  };

  const contextValue = {
    searchValue,
    setSearchValue,
    finalArray,
    setFinalArray,
    searchedVideo,
  };
  return (
    <filterContext.Provider value={contextValue}>
      {children}
    </filterContext.Provider>
  );
};

export { FilterProvider, useFilter };
