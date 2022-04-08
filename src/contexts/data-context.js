import { createContext, useContext, useReducer } from 'react';

const dataContext = createContext();

const useData = () => useContext(dataContext);

const initialState = {
  videos: [],
  categories: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'GET_VIDEOS':
      return {
        ...state,
        videos: action.payload,
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialState);
  const contextValue = { dataState, dispatch };

  return (
    <dataContext.Provider value={contextValue}>{children}</dataContext.Provider>
  );
};

export { DataProvider, useData };
