import axios from 'axios';

const config = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

const addToWatchLater = async (video, dispatch) => {
  try {
    const response = await axios.post(
      '/api/user/watchlater',
      {
        video,
      },
      config
    );
    dispatch({ type: 'ADD_TO_WATCHLATER', payload: response.data.watchlater });
  } catch (e) {
    console.log(e);
  }
};

const removeFromWatchLater = async (videoId, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/watchlater/${videoId}`,
      config
    );
    dispatch({
      type: 'REMOVE_FROM_WATCHLATER',
      payload: response.data.watchlater,
    });
  } catch (e) {
    console.log(e);
  }
};

export { addToWatchLater, removeFromWatchLater };
