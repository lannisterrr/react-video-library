import {
  useState,
  useEffect,
  useRef,
  useReducer,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Checkbox } from './Checkbox';
import { useClickOutside } from '../customHooks/useClickOutside';
import reactDom from 'react-dom';

const initialPlaylistState = {
  showPlaylistAdd: false,
  playlistName: '',
  showError: false,
  userPlaylistArray: [],
  playlistCheckBox: false,
};

const playListReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_INPUT':
      return {
        ...state,
        showPlaylistAdd: true,
      };

    case 'SET_PLAYLIST_INPUT':
      return {
        ...state,
        playlistName: action.payload,
        showError: false,
      };

    case 'ERROR_SHOW':
      return {
        ...state,
        showError: true,
      };

    case 'PUSH_TO_PLAYLIST':
      return {
        ...state,
        userPlaylistArray: [...state.userPlaylistArray, state.playlistName],
        playlistName: '',
      };

    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        playlistCheckBox: action.payload,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
const Modal = forwardRef((props, ref) => {
  const [playListState, dispatch] = useReducer(
    playListReducer,
    initialPlaylistState
  );
  const [modalShow, setModalShow] = useState(false);
  let domNode = useClickOutside(() => hide());
  const hide = () => setModalShow(false);
  useImperativeHandle(ref, () => ({
    show() {
      setModalShow(true);
    },
    hide,
  }));

  const handleCreatePlaylist = e => {
    if (playListState.userPlaylistArray.includes(playListState.playlistName))
      return;

    playListState.playlistName.length === 0
      ? dispatch({ type: 'ERROR_SHOW' })
      : dispatch({ type: 'PUSH_TO_PLAYLIST' });
  };
  console.log(playListState.playlistCheckBox);
  return reactDom.createPortal(
    <div
      className={`modal-overlay modal-container z-index-x-l ${
        modalShow && 'show-modal'
      }`}
    >
      <div ref={domNode} className="modal video-lib__modal-container">
        <div className="modal-header video-lib__modal-header p-2">
          <h3 className="heading-4 p-h-2">save to...</h3>
          <i onClick={hide} className="fa fa-times f-8 close-icon p-h-2"></i>
        </div>
        <div className="modal-content video-lib__modal-content p-8">
          <Checkbox title="Add to watch Later" />
          {playListState.userPlaylistArray.map((item, index) => (
            <Checkbox
              id={`playlist-checkbox-${index}`}
              handleCheckboxChange={e =>
                dispatch({
                  type: 'TOGGLE_CHECKBOX',
                  payload: e.target.checked,
                })
              }
              title={item}
              booleanChecked={playListState.playlistCheckBox}
              name="playlist-checkbox"
            />
          ))}
        </div>
        {playListState.showPlaylistAdd && (
          <div className="video-lib__add-playlist p-4">
            <label htmlFor="playList-name" className="t-c-3 f-5 p-2 f-bold">
              Name:
            </label>
            <input
              onChange={e =>
                dispatch({
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
              onClick={() => dispatch({ type: 'SHOW_INPUT' })}
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
});

export { Modal };
