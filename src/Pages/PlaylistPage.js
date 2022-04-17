import axios from 'axios';
import { useEffect } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { PlaylistCard } from '../components/PlaylistCard';

function PlaylistPage() {
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isAuth) return;
    (async () => {
      try {
        const res = await axios.get('/api/user/playlists', {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        });
        dispatch({ type: 'GET_PLAYLIST', payload: res.data.playlists });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(dataState.playlists);
  return (
    <>
      {dataState.playlists.length === 0 ? (
        <main className="center-text f-8 f-bold">No playlists added</main>
      ) : (
        <>
          <main className="video-lib__listing-page">
            {dataState.playlists.map(item => (
              <PlaylistCard item={item} />
            ))}
          </main>
        </>
      )}
    </>
  );
}

export { PlaylistPage };
