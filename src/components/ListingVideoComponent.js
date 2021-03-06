import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoMenu } from './VideoMenu';

function ListingVideoComponent({ video, children, toastRef, getData }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { _id, creator, creatorLogo, thumbnail, title } = video;

  const handleCardClick = () => {
    navigate(`/video/${_id}`);
  };

  return (
    <>
      <div className="listing-video__card">
        <figure
          onClick={handleCardClick}
          className="listing-video__image-container"
        >
          <img src={thumbnail.url} alt={thumbnail.altText} />
          <figcaption>
            <span>
              <i className="fa-solid fa-play f-8 t-c-1"></i>
            </span>
            <span className="f-8 f-bold t-c-1">play</span>
          </figcaption>
        </figure>
        <div className="listing-video__info-container p-2">
          <img src={creatorLogo.url} alt={creatorLogo.altText} />

          <p className="f-5 p-1 f-bold">{title}</p>
          <button
            onClick={() => {
              setShowMenu(showMenu => !showMenu);
            }}
            className="lisiting-video__info-button"
          >
            <i className="fa-solid fa-ellipsis-vertical f-8 f-bold t-c-1"></i>
          </button>

          {showMenu && (
            <VideoMenu
              toastRef={toastRef}
              getData={getData}
              video={video}
              setShowMenu={setShowMenu}
            >
              {children}
            </VideoMenu>
          )}
        </div>
        <p className="f-5 lisiting-video__creator">{creator}</p>
      </div>
    </>
  );
}

export { ListingVideoComponent };
