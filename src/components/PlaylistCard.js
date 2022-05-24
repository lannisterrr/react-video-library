import { useNavigate } from 'react-router-dom';
import { useData } from '../contexts/data-context';
import { deletePlaylist } from '../utils/playlist-util';

function PlaylistCard({ item }) {
  const { dispatch } = useData();

  const navigate = useNavigate();
  const { _id } = item;
  console.log(_id);

  const handleDeletePlaylist = () => {
    deletePlaylist(_id, dispatch);
  };

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
            <p
              onClick={handleDeletePlaylist}
              className="f-6 p-h-2 f-bold video-lib-text-1 pointer"
            >
              Delete this Playlist
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
