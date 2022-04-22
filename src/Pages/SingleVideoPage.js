import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import { Modal } from '../components/Modal';
import { addToLikes, removeFromLikes } from '../utils/like-utils';

import {
  addToWatchLater,
  removeFromWatchLater,
} from '../utils/watchLater-util';
import { Notes } from '../components/Notes';

function SingleVideoPage({ toastRef, getData }) {
  const [showModal, setShowModal] = useState(false);
  const { auth } = useAuth();
  const { dataState, dispatch } = useData();
  const { videoId } = useParams();
  const videoRef = useRef();

  function getVideoDetails(videos, videoId) {
    return videos.find(video => video._id === videoId);
  }
  const video = getVideoDetails(dataState.videos, videoId);

  const handleCRUD = (func, message, type, funcParam1) => {
    if (auth.isAuth) {
      func(funcParam1, dispatch);
      toastRef.current.show();
      getData(message, type);
    } else {
      toastRef.current.show();
      getData('Login First!!', 'fail');
    }
  };

  const handleOpenModal = () => {
    if (auth.isAuth) {
      setShowModal(true); // modal show
    } else {
      toastRef.current.show();
      getData('Login First!!', 'fail');
    }
  };

  return (
    <>
      <main className="single-videoPage__wrapper">
        <div className="video-content">
          <div className="video-container">
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${video.videoYTId}`}
              width="100%"
              height="100%"
              ref={videoRef}
            />
          </div>
          <div className="video-info-container">
            <p className="heading-3 video-info__title">{video.title}</p>
            <div className="video-info__cta">
              <span>
                {dataState.likes.find(i => i._id === video._id) ? (
                  <i
                    onClick={() =>
                      handleCRUD(
                        removeFromLikes,
                        'Remove From liked',
                        'fail',
                        video._id
                      )
                    }
                    className="fa-solid fa-thumbs-up f-8 p-h-2 pointer"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      handleCRUD(addToLikes, 'Added to liked', 'success', video)
                    }
                    className="fa-regular fa-thumbs-up f-8 p-h-2 pointer"
                  ></i>
                )}
              </span>
              <span>
                <i
                  onClick={() =>
                    dataState.watchLater?.find(i => i._id === video._id)
                      ? handleCRUD(
                          removeFromWatchLater,
                          'Remove From watchlater',
                          'fail',
                          video._id
                        )
                      : handleCRUD(
                          addToWatchLater,
                          'Added to Watch Later',
                          'success',
                          video
                        )
                  }
                  className="fa-regular fa-clock f-8 p-h-2 pointer"
                ></i>
              </span>
              <span>
                <i
                  onClick={handleOpenModal}
                  className="fa-regular fa-folder f-8 p-h-2 pointer"
                ></i>
              </span>
            </div>
          </div>
          <div className="video-info__description">
            <img src={video.creatorLogo.url} alt={video.creatorLogo.altText} />
            <p className="f-7 p-h-4 video-info__creator">{video.creator}</p>
          </div>
          <p className="f-6">{video.description}</p>
        </div>
        <Notes videoRef={videoRef} />
      </main>
      {showModal && (
        <Modal
          video={video}
          setShowModal={setShowModal}
          toastRef={toastRef}
          getData={getData}
        />
      )}
    </>
  );
}

export { SingleVideoPage };
