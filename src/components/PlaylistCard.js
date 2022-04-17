import React from 'react';

function PlaylistCard({ item }) {
  return (
    <div className="listing-video__card">
      <figure className="listing-video__image-container">
        <img
          src="http://i3.ytimg.com/vi/SwQhKFMxmDY/hqdefault.jpg"
          alt="thumbnail"
        />
        <figcaption>
          <span>
            <i className="fa-solid fa-play f-8 t-c-1"></i>
          </span>
          <span className="f-8 f-bold t-c-1">play</span>
        </figcaption>
      </figure>
      <div className="playlist-card__info-container">
        <p className="f-8 p-2 f-bold">{item.title}</p>
        <p className="f-6 p-h-2 f-bold video-lib-text-1">view full playlist</p>
      </div>
    </div>
  );
}

export { PlaylistCard };
