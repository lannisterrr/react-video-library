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

const addToPlaylist = async (playlistId, video, dispatch) => {
  console.log(video, 'video in api');
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      config
    );
    // dispatch({ type: 'ADD_TO_PLAYLIST', payload: response.data.playlist });
    console.log(response.data.playlist);
  } catch (e) {
    console.log(e);
  }
};

export { createPlaylist, addToPlaylist };
