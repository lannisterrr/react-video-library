import axios from 'axios';
import { useEffect } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { ListingVideoComponent } from '../components/ListingVideoComponent';
import { removeFromLikes } from '../utils/like-utils';

function LikePage() {
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isAuth) return;
    (async () => {
      try {
        const res = await axios.get('/api/user/likes', {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        });
        console.log(res.data.likes, 'Get Likes');
        dispatch({ type: 'GET_LIKES', payload: res.data.likes });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {dataState.likes.length === 0 ? (
        <main className="center-text f-8 f-bold">No likes added</main>
      ) : (
        <>
          <main className="video-lib__listing-page">
            {dataState.likes.map(item => (
              <ListingVideoComponent key={item.id} video={item}>
                <span
                  onClick={() => removeFromLikes(item._id, dispatch)}
                  className="f-6 w-100 menu-item pointer"
                >
                  <i class="fa-solid fa-thumbs-up f-8 p-h-2"></i>
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
