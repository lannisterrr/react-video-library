import React from 'react';

function ListingVideoComponent({ video }) {
  const { creator, creatorLogo, thumbnail, title, videoYTID } = video;
  return (
    <>
      <div className="listing-video__card">
        <figure className="listing-video__image-container">
          <img src={thumbnail.url} alt={thumbnail.altText} />
          <figcaption>
            <span>
              <i class="fa-solid fa-play f-8 t-c-1"></i>
            </span>
            <span className="f-8 f-bold t-c-1">play</span>
          </figcaption>
        </figure>
        <div className="listing-video__info-container p-2">
          <img src={creatorLogo.url} alt={creatorLogo.altText} />

          <p className="f-5 p-1 f-bold">{title}</p>
          <button className="lisiting-video__info-button">
            <i class="fa-solid fa-ellipsis-vertical f-8 f-bold t-c-1"></i>
          </button>
        </div>
        <p className="f-5 lisiting-video__creator">{creator}</p>
      </div>
    </>
  );
}

export { ListingVideoComponent };