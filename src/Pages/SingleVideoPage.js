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
          <p className="heading-3 video-info__title">{video.title}</p>
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
        <p className="heading-4 center-text t-c-3">Add Notes :</p>
        <div className="note__input-field">
          <input
            type="text"
            placeholder="Title..."
            className="note__input p-v-4"
          />
          <textarea
            name="notes-text"
            id=""
            cols="30"
            rows="10"
            placeholder="Description..."
            className="note__input note__input-textarea"
          ></textarea>
          <div className="input-field__button-container">
            <button className="input-field__button m-h-4">Save</button>
            <button className="input-field__button">Discard</button>
          </div>
        </div>
        <div className="user-note  p-h-3">
          <div className="user-note__header">
            <p className="f-6 video-lib-text-2">Hyphotesis exercise</p>
            <span className="user-note__time-stamp f-8">
              <i class="fa-regular fa-clock f-8 p-h-2"></i>
              1:04
            </span>
          </div>
          <p className="f-6 video-lib-text-1">
            This is what I refer to as experimentation and hypothesis-testing.
            Experimentation can have somewhat of a negative connotation to some,
            indicating engagement in “impulsive” types of behaviors (e.g., sex,
            drugs, gambling).
          </p>
          <div className="user-note__btn">
            <span className="m-h-2">
              <i class="fa-solid fa-pen f-7  pointer"></i>
            </span>
            <span className="m-h-2">
              <i class="fa-solid fa-trash f-7  pointer"></i>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export { SingleVideoPage };
