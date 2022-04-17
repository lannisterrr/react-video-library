import { createContext, useContext, useReducer } from 'react';
import { playListReducer } from '../reducers/playlist-reducer';

const playlistContext = createContext();

const usePlaylist = () => useContext(playlistContext);

const initialPlaylistState = {
  showPlaylistAdd: false,
  playlistName: '',
  showError: false,
};

const PlaylistProvider = ({ children }) => {
  const [playListState, dispatch] = useReducer(
    playListReducer,
    initialPlaylistState
  );
  const contextValue = { playListState, dispatch };
  return (
    <playlistContext.Provider value={contextValue}>
      {children}
    </playlistContext.Provider>
  );
};

export { PlaylistProvider, usePlaylist };
