import { useState } from 'react';
import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import {
  addToWatchLater,
  removeFromWatchLater,
} from '../utils/watchLater-util';
import { usePlaylist } from '../contexts/playlist-context';
import { useClickOutside } from '../customHooks/useClickOutside';

import { Modal } from './Modal';

function VideoMenu({ children, toastRef, getData, video, setShowMenu }) {
  const [showModal, setShowModal] = useState(false);
  // let domNode = useClickOutside(() => setShowMenu(false));
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();
  const { playListState, dispatch: playListDispatch } = usePlaylist();
  const failedLoginPopup = () => {
    toastRef.current.show();
    getData('Login First!!', 'fail');
    setShowMenu(false);
  };

  const handleCRUD = (func, message, type, funcParam1) => {
    if (auth.isAuth) {
      func(funcParam1, dispatch, auth.token);
      toastRef.current.show();
      getData(message, type);
      setShowMenu(false);
    } else {
      failedLoginPopup();
    }
  };

  const handleOpenModal = () => {
    if (auth.isAuth) {
      setShowModal(true); // modal show
    } else {
      failedLoginPopup();
    }
  };
  const videoPresent = dataState.watchLater?.find(i => i._id === video._id);

  return (
    <>
      <div className="listing-video__menu-container">
        <span
          onClick={() =>
            videoPresent
              ? handleCRUD(
                  removeFromWatchLater,
                  'Removed From watchlater',
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
          className="f-6 w-100 menu-item pointer"
        >
          <i className="fa-regular fa-clock f-8 p-h-2"></i>
          {videoPresent ? 'Remove from watch later' : 'Add to watch Later'}
        </span>

        <span onClick={handleOpenModal} className="f-6 w-100 menu-item pointer">
          <i className="fa-regular fa-folder f-8 p-h-2 "></i>
          Add to Playlist
        </span>
        {children}
      </div>
      {showModal && (
        <Modal
          toastRef={toastRef}
          getData={getData}
          setShowModal={setShowModal}
          video={video}
          setShowMenu={setShowMenu}
        />
      )}
    </>
  );
}

export { VideoMenu };
