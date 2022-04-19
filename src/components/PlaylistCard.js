import { useNavigate } from 'react-router-dom';

function PlaylistCard({ item }) {
  const navigate = useNavigate();
  const { _id } = item;
  console.log(_id);
  return (
    <>
      {item.videos.length > 0 ? (
        <div className="listing-video__card">
          <figure
            onClick={() => navigate(`/playlist/${_id}`)}
            className="listing-video__image-container"
          >
            <img src={item.videos[0].thumbnail.url} alt="thumbnail" />
            <figcaption>
              <span>
                <i className="fa-solid fa-play f-8 t-c-1"></i>
              </span>
              <span className="f-8 f-bold t-c-1">
                {item.videos.length} videos
              </span>
            </figcaption>
          </figure>
          <div className="playlist-card__info-container">
            <p className="f-8 p-2 f-bold">{item.title}</p>
            <p className="f-6 p-h-2 f-bold video-lib-text-1">
              view full playlist
            </p>
          </div>
        </div>
      ) : (
        <main className="center-text f-8 f-bold">
          Please add video to playlist
        </main>
      )}
    </>
  );
}

export { PlaylistCard };
