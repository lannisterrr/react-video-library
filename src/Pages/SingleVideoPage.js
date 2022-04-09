import React from 'react';
import { useParams } from 'react-router-dom';
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
      <div className="video-content">
        <div className="video-container">
          <ReactPlayer
            className="react-player"
            playing
            controls
            url={`https://www.youtube.com/watch?v=${video.videoYTId}`}
            width="100%"
            height="100%"
          />
        </div>
        <div className="video-info-container">
          <p className="heading-3">{video.title}</p>
          <div className="video-info__cta">
            <span>
              <i class="fa-regular fa-thumbs-up f-8 p-h-2 pointer"></i>
            </span>
            <span>
              <i class="fa-regular fa-clock f-8 p-h-2 pointer"></i>
            </span>
            <span>
              <i class="fa-regular fa-folder f-8 p-h-2 pointer"></i>
            </span>
          </div>
        </div>
        <div className="video-info__description">
          <img src={video.creatorLogo.url} alt={video.creatorLogo.altText} />
          <p className="f-7 p-h-4 video-info__creator">{video.creator}</p>
        </div>
        <p className="f-6">{video.description}</p>
      </div>
      <div className="single-video__notes-container">
        <p className="heading-4">Add Notes :</p>
      </div>
    </main>
  );
}

export default SingleVideoPage;
