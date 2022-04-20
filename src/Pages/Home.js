import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListingVideoComponent } from '../components/ListingVideoComponent';

import { useData } from '../contexts/data-context';

function Home({ toastRef, getData }) {
  const { dataState, dispatch } = useData();
  const [finalArray, setFinalArray] = useState(dataState.videos);
  const [allActive, setAllActive] = useState(true);
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

  const allSelect = () => {
    dispatch({ type: 'SELECTED_CATEGORY', payload: '' });
    setFinalArray(dataState.videos);
    setAllActive(!allActive);
  };

  const categorySelect = (userClickedCategory, allVideos) => {
    dispatch({ type: 'SELECTED_CATEGORY', payload: userClickedCategory });
    setAllActive(false);
    const res = allVideos.filter(
      video => video.categoryName === userClickedCategory.categoryName
    );
    setFinalArray(res);
  };

  useEffect(() => {
    setFinalArray(dataState.videos);
  }, [dataState.videos]);

  return (
    <>
      <div className="video-lib__filters-container z-index-md">
        <button
          onClick={allSelect}
          className={`video-lib__filter m-h-3 ${allActive && 'filter-active'}`}
        >
          All
        </button>
        {dataState.categories.map(category => {
          console.log(category.isActive);
          return (
            <button
              onClick={() => categorySelect(category, dataState.videos)}
              key={category._id}
              className={`video-lib__filter m-h-3 ${
                category.isActive && 'filter-active'
              }`}
            >
              {category.categoryName}
            </button>
          );
        })}
      </div>
      <main className="video-lib__listing-page">
        {finalArray &&
          finalArray.map(video => (
            <ListingVideoComponent
              key={video._id}
              video={video}
              toastRef={toastRef}
              getData={getData}
            />
          ))}
      </main>
    </>
  );
}

export { Home };
