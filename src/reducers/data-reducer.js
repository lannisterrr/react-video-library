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

    case 'GET_PLAYLIST':
      return {
        ...state,
        playlists: action.payload,
      };

    case 'CREATE_NEW_PLAYLIST':
      return {
        ...state,
        playlists: action.payload,
      };

    case 'DELETE_PLAYLIST':
      return {
        ...state,
        playlists: action.payload,
      };

    case 'ADD_VIDEO_TO_PLAYLIST':
      const UpdatedPlaylistAfterAdd = state.playlists.map(item =>
        item._id === action.payload._id ? { ...action.payload } : { ...item }
      );
      return {
        ...state,
        playlists: UpdatedPlaylistAfterAdd,
      };

    case 'REMOVE_VIDEO_FROM_PLAYLIST':
      const UpdatedPlayAfterDelete = state.playlists.map(item =>
        item._id === action.payload._id ? { ...action.payload } : { ...item }
      );
      return {
        ...state,
        playlists: UpdatedPlayAfterDelete,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export { dataReducer };
