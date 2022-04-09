import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { ListingVideoComponent } from '../components/ListingVideoComponent';

function Home() {
  const [videosData, setVideosData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/videos');
        setVideosData(res.data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        setCategoriesData(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="video-lib__filters-container z-index-md">
        {categoriesData.map(category => (
          <button key={category._id} className="video-lib__filter m-h-3">
            {category.categoryName}
          </button>
        ))}
      </div>
      <main className="video-lib__listing-page">
        {videosData.map(video => (
          <ListingVideoComponent key={video._id} video={video} />
        ))}
      </main>
    </>
  );
}

export default Home;
