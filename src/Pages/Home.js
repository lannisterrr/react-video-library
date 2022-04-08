import axios from 'axios';
import { useEffect } from 'react';
import { ListingVideoComponent } from '../components/ListingVideoComponent';

import { useData } from '../contexts/data-context';

function Home() {
  const { dataState, dispatch } = useData();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/videos');
        dispatch({ type: 'GET_VIDEOS', payload: res.data.videos });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        dispatch({ type: 'GET_CATEGORIES', payload: res.data.categories });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="video-lib__filters-container z-index-md">
        {dataState.categories.map(category => (
          <button key={category._id} className="video-lib__filter m-h-3">
            {category.categoryName}
          </button>
        ))}
      </div>
      <main className="video-lib__listing-page">
        {dataState.videos.map(video => (
          <ListingVideoComponent key={video._id} video={video} />
        ))}
      </main>
    </>
  );
}

export default Home;
