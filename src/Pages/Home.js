import axios from 'axios';
import { useState, useEffect } from 'react';
import { ListingVideoComponent } from '../components/ListingVideoComponent';

function Home() {
  const [videosData, setVideosData] = useState([]);
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
  return (
    <main className="video-lib__listing-page">
      {videosData.map(video => (
        <ListingVideoComponent key={video._id} video={video} />
      ))}
    </main>
  );
}

export default Home;
