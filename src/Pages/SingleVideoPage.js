import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useData } from '../contexts/data-context';

function SingleVideoPage() {
  const { dataState } = useData();
  const { videoId } = useParams();

  function getVideoDetails(videos, videoId) {
    return videos.find(video => video._id === videoId);
  }

  const video = getVideoDetails(dataState.videos, videoId);

  return (
    <main className="single-videoPage__wrapper">
      <div className="single-video__container">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${video.videoYTId}`}
        />
      </div>
    </main>
  );
}

export default SingleVideoPage;
