import axios from 'axios';
import { useEffect } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { ListingVideoComponent } from '../components/ListingVideoComponent';
import { removeFromLikes } from '../utils/like-utils';
import { Helmet } from 'react-helmet';

function LikePage({ toastRef, getData }) {
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();

  const handleRemoveFromLikes = videoId => {
    removeFromLikes(videoId, dispatch);
    toastRef.current.show();
    getData('Removed from liked', 'fail');
  };

  useEffect(() => {
    if (!auth.isAuth) return;
    (async () => {
      try {
        const res = await axios.get('/api/user/likes', {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        });
        dispatch({ type: 'GET_LIKES', payload: res.data.likes });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Liked Videos</title>
      </Helmet>
      {dataState.likes.length === 0 ? (
        <main className="center-text f-8 f-bold">No likes added</main>
      ) : (
        <>
          <p className="center-text f-8 f-bold page-heading t-c-3">
            Liked Videos
          </p>
          <main className="video-lib__listing-page">
            {dataState.likes.map(item => (
              <ListingVideoComponent key={item.id} video={item}>
                <span
                  onClick={() => handleRemoveFromLikes(item._id)}
                  className="f-6 w-100 menu-item pointer"
                >
                  <i className="fa-solid fa-thumbs-up f-8 p-h-2"></i>
                  Remove from likes
                </span>
              </ListingVideoComponent>
            ))}
          </main>
        </>
      )}
    </>
  );
}

export { LikePage };
