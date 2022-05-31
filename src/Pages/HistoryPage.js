import axios from 'axios';
import { useEffect } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { ListingVideoComponent } from '../components/ListingVideoComponent';
import { clearHistory, removeFromHistory } from '../utils/history-util';
import { Helmet } from 'react-helmet';

function HistoryPage({ toastRef, getData }) {
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isAuth) return;
    (async () => {
      try {
        const res = await axios.get('/api/user/history', {
          headers: {
            authorization: auth.token,
          },
        });
        dispatch({ type: 'GET_HISTORY', payload: res.data.history });
        console.log(res.data.history);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDeleteFromHistory = videoId => {
    removeFromHistory(videoId, dispatch, auth.token);
    toastRef.current.show();
    getData('Video Deleted from history', 'fail');
  };

  const handleClearHistory = () => {
    clearHistory(dispatch, auth.token);
    toastRef.current.show();
    getData('History cleared', 'fail');
  };

  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      {dataState.history.length === 0 ? (
        <main className="center-text f-8 f-bold">
          Watch videos to see in the historyy!!
        </main>
      ) : (
        <>
          <div className="playlist-header">
            <button
              onClick={handleClearHistory}
              class="btn btn-danger t-c-1 m-l-auto playlist-delete_button"
            >
              Clear History
            </button>
          </div>
          <main className="video-lib__listing-page">
            {dataState.history.map(item => (
              <ListingVideoComponent key={item._id} video={item}>
                <span
                  onClick={() => handleDeleteFromHistory(item._id)}
                  className="f-6 w-100 menu-item pointer"
                >
                  <i className="fa-solid fa-trash  f-8 p-h-2"></i>
                  Remove from history
                </span>
              </ListingVideoComponent>
            ))}
          </main>
        </>
      )}
    </>
  );
}

export { HistoryPage };
