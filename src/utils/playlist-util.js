import axios from 'axios';

const createPlaylist = async (playlistName, dispatch, token) => {
  try {
    const response = await axios.post(
      '/api/user/playlists',
      {
        playlist: { title: playlistName, description: 'Playlist' },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'CREATE_NEW_PLAYLIST', payload: response.data.playlists });
    console.log(response.data.playlists);
  } catch (e) {
    console.log(e);
  }
};

const deletePlaylist = async (playlistId, dispatch, token) => {
  console.log(token, 'delete token');
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'DELETE_PLAYLIST', payload: response.data.playlists });
  } catch (e) {
    console.log(e);
  }
};

const addToPlaylist = async (playlistId, video, dispatch, token) => {
  console.log(token);
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: 'ADD_VIDEO_TO_PLAYLIST',
      payload: response.data.playlist,
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteFromPlaylist = async (playlistId, videoId, dispatch, token) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
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
