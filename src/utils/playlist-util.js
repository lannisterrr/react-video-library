import axios from 'axios';

const config = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

const addToPlaylist = async (playlistName, dispatch) => {
  try {
    const response = await axios.post(
      '/api/user/playlists',
      {
        playlist: { title: playlistName, description: 'Playlist' },
      },
      config
    );
    dispatch({ type: 'ADD_TO_PLAYLIST', payload: response.data.playlists });
    console.log(response.data.playlists);
  } catch (e) {
    console.log(e);
  }
};

export { addToPlaylist };
