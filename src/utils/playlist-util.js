import axios from 'axios';

const config = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

const createPlaylist = async (playlistName, dispatch) => {
  try {
    const response = await axios.post(
      '/api/user/playlists',
      {
        playlist: { title: playlistName, description: 'Playlist' },
      },
      config
    );
    dispatch({ type: 'CREATE_NEW_PLAYLIST', payload: response.data.playlists });
    console.log(response.data.playlists);
  } catch (e) {
    console.log(e);
  }
};

const deletePlaylist = async (playlistId, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      config
    );
    dispatch({ type: 'DELETE_PLAYLIST', payload: response.data.playlists });
  } catch (e) {
    console.log(e);
  }
};

const addToPlaylist = async (playlistId, video, dispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      config
    );
    dispatch({
      type: 'ADD_VIDEO_TO_PLAYLIST',
      payload: response.data.playlist,
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteFromPlaylist = async (playlistId, videoId, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      config
    );
    dispatch({
      type: 'REMOVE_VIDEO_FROM_PLAYLIST',
      payload: response.data.playlist,
    });
  } catch (e) {
    console.log(e);
  }
};

export { createPlaylist, addToPlaylist, deleteFromPlaylist, deletePlaylist };
