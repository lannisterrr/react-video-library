import { createContext, useContext, useReducer } from 'react';
import { dataReducer } from '../reducers/data-reducer';

const dataContext = createContext();

const useData = () => useContext(dataContext);

const initialState = {
  videos: [],
  categories: [],
  likes: [],
  watchLater: [],
  playlists: [],
  history: [],
};
console.log(initialState.history);

const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialState);
  const contextValue = { dataState, dispatch };
  return (
    <dataContext.Provider value={contextValue}>{children}</dataContext.Provider>
  );
};

export { DataProvider, useData };
