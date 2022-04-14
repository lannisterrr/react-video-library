import axios from 'axios';

const config = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

const addToLikes = async (video, dispatch) => {
  try {
    const response = await axios.post(
      '/api/user/likes',
      {
        video,
      },
      config
    );
    dispatch({ type: 'ADD_TO_LIKES', payload: response.data.likes });
  } catch (e) {
    console.log(e);
  }
};

const removeFromLikes = async (videoId, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, config);
    dispatch({ type: 'REMOVE_FROM_LIKES', payload: response.data.likes });
  } catch (e) {
    console.log(e);
  }
};

export { addToLikes, removeFromLikes };
