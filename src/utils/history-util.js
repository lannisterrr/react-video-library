import axios from 'axios';

const addToHistory = async (video, dispatch, token) => {
  try {
    const response = await axios.post(
      '/api/user/history',
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'ADD_TO_HISTORY', payload: response.data.history });
  } catch (e) {
    console.log(e);
  }
};

const removeFromHistory = async (videoId, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/history/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'REMOVE_FROM_HISTORY', payload: response.data.history });
  } catch (e) {
    console.log(e);
  }
};

const clearHistory = async (dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'CLEAR_HISTORY', payload: response.data.history });
  } catch (e) {
    console.log(e);
  }
};

export { addToHistory, removeFromHistory, clearHistory };
