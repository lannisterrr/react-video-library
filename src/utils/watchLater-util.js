import axios from 'axios';

const addToWatchLater = async (video, dispatch, token) => {
  try {
    const response = await axios.post(
      '/api/user/watchlater',
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'ADD_TO_WATCHLATER', payload: response.data.watchlater });
  } catch (e) {
    console.log(e);
  }
};

const removeFromWatchLater = async (videoId, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: 'REMOVE_FROM_WATCHLATER',
      payload: response.data.watchlater,
    });
  } catch (e) {
    console.log(e);
  }
};

export { addToWatchLater, removeFromWatchLater };
