import { Checkbox } from './Checkbox';
import { useClickOutside } from '../customHooks/useClickOutside';
import reactDom from 'react-dom';
import { useData } from '../contexts/data-context';
import { usePlaylist } from '../contexts/playlist-context';
import { createPlaylist, addToPlaylist } from '../utils/playlist-util';

const Modal = ({ setShowModal, video }) => {
  const { playListState, dispatch: playListDispatch } = usePlaylist();
  const { dataState, dispatch: userDataDispatch } = useData();

  // let domNode = useClickOutside(() =>
  //   playListDispatch({ type: 'HIDE_MODAL', payload: true })
  // );

  const handleCreatePlaylist = () => {
    if (!playListState.playlistName.length > 0) {
      playListDispatch({ type: 'ERROR_SHOW' });
      return;
    }
    const unique = dataState.playlists.find(
      playlist => playlist.title === playListState.playlistName
    );
    if (unique) return;
    createPlaylist(playListState.playlistName, userDataDispatch);
    playListDispatch({ type: 'INPUT_CLEAR' });
  };

  return reactDom.createPortal(
    <div className="modal-overlay modal-container z-index-x-l show-modal">
      <div className="modal video-lib__modal-container">
        <div className="modal-header video-lib__modal-header p-2">
          <h3 className="heading-4 p-h-2">save to...</h3>
          <i
            onClick={() => setShowModal(false)}
            className="fa fa-times f-8 close-icon p-h-2"
          ></i>
        </div>
        <div className="modal-content video-lib__modal-content p-8">
          <Checkbox title="Add to watch Later" />
          {dataState.playlists &&
            dataState.playlists.map((item, index) => {
              let isVideoInPlaylist = item.videos.some(
                i_video => i_video._id === video._id
              );
              return (
                <Checkbox
                  key={item._id}
                  id={`playlist-checkbox-${index + 1}`}
                  title={item.title}
                  handleCheckboxChange={() =>
                    addToPlaylist(item._id, video, userDataDispatch)
                  }
                  booleanChecked={isVideoInPlaylist}
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
