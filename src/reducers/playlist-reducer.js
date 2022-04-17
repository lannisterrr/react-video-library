const playListReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_INPUT':
      return {
        ...state,
        showPlaylistAdd: true,
      };

    case 'SET_PLAYLIST_INPUT':
      return {
        ...state,
        playlistName: action.payload,
        showError: false,
      };

    case 'ERROR_SHOW':
      return {
        ...state,
        showError: true,
      };

    case 'INPUT_CLEAR':
      return {
        ...state,
        playlistName: '',
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export { playListReducer };
