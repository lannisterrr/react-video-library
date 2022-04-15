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

    case 'GET_LIKES':
      return {
        ...state,
        likes: action.payload,
      };

    case 'ADD_TO_LIKES':
      return {
        ...state,
        likes: action.payload,
      };

    case 'REMOVE_FROM_LIKES':
      return {
        ...state,
        likes: action.payload,
      };

    case 'GET_WATCHLATER':
      return {
        ...state,
        watchLater: action.payload,
      };

    case 'ADD_TO_WATCHLATER':
      return {
        ...state,
        watchLater: action.payload,
      };

    case 'REMOVE_FROM_WATCHLATER':
      return {
        ...state,
        watchLater: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export { dataReducer };
