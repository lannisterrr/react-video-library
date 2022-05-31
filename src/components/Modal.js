import { Checkbox } from './Checkbox';
import { useClickOutside } from '../customHooks/useClickOutside';
import reactDom from 'react-dom';
import { useData } from '../contexts/data-context';
import { usePlaylist } from '../contexts/playlist-context';
import { useAuth } from '../contexts/auth-context';
import {
  createPlaylist,
  addToPlaylist,
  deleteFromPlaylist,
} from '../utils/playlist-util';
import { useLocation } from 'react-router-dom';

const Modal = ({ setShowModal, video, toastRef, getData, setShowMenu }) => {
  const { playListState, dispatch: playListDispatch } = usePlaylist();
  const { dataState, dispatch: userDataDispatch } = useData();
  const { auth } = useAuth();
  let playObjId = null;
  console.log(playObjId);
  const location = useLocation();
  let domNode = useClickOutside(() => setShowModal(false));

  const handleCreatePlaylist = () => {
    if (!playListState.playlistName.length > 0) {
      playListDispatch({ type: 'ERROR_SHOW' });
      return;
    }
    const notUnique = dataState.playlists.find(
      playlist => playlist.title === playListState.playlistName
    );
    if (notUnique) return;

    createPlaylist(playListState.playlistName, userDataDispatch, auth.token);
    playListDispatch({ type: 'INPUT_CLEAR' });

    // addToPlaylist(playObjId, video, userDataDispatch);
  };

  const handlePlaylistCRUD = (e, item) => {
    if (e.target.checked) {
      addToPlaylist(item._id, video, userDataDispatch, auth.token);
      setShowModal(false);
      toastRef.current.show();
      getData('video added to playlist!', 'success');
    } else {
      deleteFromPlaylist(item._id, video._id, userDataDispatch, auth.token);
      setShowModal(false);
      toastRef.current.show();
      getData('video deleted from playlist', 'fail');
    }
  };

  return reactDom.createPortal(
    <div className="modal-overlay modal-container z-index-x-l show-modal">
      <div ref={domNode} className="modal video-lib__modal-container">
        <div className="modal-header video-lib__modal-header p-2">
          <h3 className="heading-4 p-h-2">save to...</h3>
          <i
            onClick={() => setShowModal(false)}
            className="fa fa-times f-8 close-icon p-h-2"
          ></i>
        </div>
        <div className="modal-content video-lib__modal-content p-8">
          {dataState.playlists.length === 0 && (
            <p className="f-6 t-c-3">No playlist added!</p>
          )}
          {dataState.playlists.map((item, index) => {
            playObjId = item;
            let isVideoInPlaylist = item.videos.some(
              i_video => i_video._id === video._id
            );
            return (
              <Checkbox
                key={item._id}
                defaultChecked={isVideoInPlaylist}
                id={`playlist-checkbox-${index + 1}`}
                title={item.title}
                handleCheckboxChange={e => handlePlaylistCRUD(e, item)}
              />
            );
          })}
        </div>
        {playListState.showPlaylistAdd && (
          <div className="video-lib__add-playlist p-4">
            <label htmlFor="playList-name" className="t-c-3 f-5 p-2 f-bold">
              Name:
            </label>
            <input
              onChange={e =>
                playListDispatch({
                  type: 'SET_PLAYLIST_INPUT',
                  payload: e.target.value,
                })
              }
              value={playListState.playlistName}
              type="text"
              className="note__input modal__input p-v-4"
            />
          </div>
        )}
        {playListState.showError && (
          <p className="f-5 f-bold t-c-3 center-text">Please add a name!!!</p>
        )}
        <div className="modal-button-container p-4">
          {playListState.showPlaylistAdd ? (
            <button
              onClick={handleCreatePlaylist}
              className="input-field__button"
            >
              + Create
            </button>
          ) : (
            <button
              onClick={() => playListDispatch({ type: 'SHOW_INPUT' })}
              className="input-field__button"
            >
              + Create new Playlist
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export { Modal };
