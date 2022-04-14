import axios from 'axios';
import { useEffect } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { ListingVideoComponent } from '../components/ListingVideoComponent';

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

  // useEffect(() => {
  //   toastRef.current.show();
  //   getData('Deleted', 'fail');
  // }, [dataState.watchLater]);

  return (
    <>
      {dataState.watchLater.length === 0 ? (
        <main className="center-text f-8 f-bold">No Watchlater added</main>
      ) : (
        <>
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
