import axios from 'axios';
import { useEffect } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { ListingVideoComponent } from '../components/ListingVideoComponent';
import { Helmet } from 'react-helmet';

function WatchLaterPage({ toastRef, getData }) {
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isAuth) return;
    (async () => {
      try {
        const res = await axios.get('/api/user/watchlater', {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        });
        dispatch({ type: 'GET_WATCHLATER', payload: res.data.watchlater });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(dataState.watchLater);

  return (
    <>
      <Helmet>
        <title>WatchLater</title>
      </Helmet>
      {dataState.watchLater.length === 0 ? (
        <main className="center-text f-8 f-bold ">No Watchlater added</main>
      ) : (
        <>
          <p className="center-text f-8 f-bold page-heading t-c-3">
            Watchlater
          </p>

          <main className="video-lib__listing-page">
            {dataState.watchLater.map(item => (
              <ListingVideoComponent
                key={item.id}
                video={item}
                toastRef={toastRef}
                getData={getData}
              ></ListingVideoComponent>
            ))}
          </main>
        </>
      )}
    </>
  );
}

export { WatchLaterPage };
