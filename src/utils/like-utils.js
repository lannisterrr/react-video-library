import axios from 'axios';

const addToLikes = async (video, dispatch, token) => {
  try {
    const response = await axios.post(
      '/api/user/likes',
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'ADD_TO_LIKES', payload: response.data.likes });
  } catch (e) {
    console.log(e);
  }
};

const removeFromLikes = async (videoId, dispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'REMOVE_FROM_LIKES', payload: response.data.likes });
  } catch (e) {
    console.log(e);
  }
};

export { addToLikes, removeFromLikes };
