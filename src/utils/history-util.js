import axios from 'axios';

const config = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

const addToHistory = async (video, dispatch) => {
  try {
    const response = await axios.post(
      '/api/user/history',
      {
        video,
      },
      config
    );
    dispatch({ type: 'ADD_TO_HISTORY', payload: response.data.history });
    console.log(response.data.history);
  } catch (e) {
    console.log(e);
  }
};

const removeFromHistory = async (videoId, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${videoId}`, config);
    dispatch({ type: 'REMOVE_FROM_HISTORY', payload: response.data.history });
  } catch (e) {
    console.log(e);
  }
};

const clearHistory = async dispatch => {
  try {
    const response = await axios.delete(`/api/user/history/all`, config);
    dispatch({ type: 'CLEAR_HISTORY', payload: response.data.history });
  } catch (e) {
    console.log(e);
  }
};

export { addToHistory, removeFromHistory, clearHistory };
