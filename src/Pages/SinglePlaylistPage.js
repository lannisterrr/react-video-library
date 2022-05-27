import { ListingVideoComponent } from '../components/ListingVideoComponent';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useData } from '../contexts/data-context';
import { deletePlaylist, deleteFromPlaylist } from '../utils/playlist-util';
import { Helmet } from 'react-helmet';
import { useAuth } from '../contexts/auth-context';

function SinglePlaylistPage() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { dataState, dispatch } = useData();
  const { playlistID } = useParams();

  function getPlaylistDetails(playlists, playlistId) {
    return playlists.find(playlist => playlist._id === playlistId);
  }
  const playlist = getPlaylistDetails(dataState.playlists, playlistID);

  const handleDeletePlaylist = () => {
    deletePlaylist(playlistID, dispatch, auth.token);
    navigate('/playlist');
  };

  const handleVideoDeleteFromPlaylist = videoId => {
    deleteFromPlaylist(playlistID, videoId, dispatch, auth.token);
  };

  return (
    <>
      <Helmet>
        <title>{playlist.title}</title>
      </Helmet>
      <div className="playlist-header">
        <p className="heading-3 t-c-3 center-text playlist-title">
          Playlist Name : ({playlist.title})
        </p>
        <button
          onClick={handleDeletePlaylist}
          class="btn btn-danger t-c-1 playlist-delete_button"
        >
          Delete Playlist
        </button>
      </div>
      {playlist.videos.length ? (
        <main className="video-lib__listing-page">
          {playlist.videos.map(item => (
            <ListingVideoComponent video={item}>
              <span
                onClick={() => handleVideoDeleteFromPlaylist(item._id)}
                className="f-6 w-100 menu-item pointer"
              >
                <i class="fa-solid fa-trash f-8 p-h-2"></i>
                Remove from {playlist.title}
              </span>
            </ListingVideoComponent>
          ))}
        </main>
      ) : (
        <main className="center-text f-8 f-bold">No Videos added</main>
      )}
    </>
  );
}

export default SinglePlaylistPage;
