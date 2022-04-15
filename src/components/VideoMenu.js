import { useData } from '../contexts/data-context';
import { useAuth } from '../contexts/auth-context';
import {
  addToWatchLater,
  removeFromWatchLater,
} from '../utils/watchLater-util';

function VideoMenu({ children, toastRef, getData, video, setShowMenu }) {
  const { dataState, dispatch } = useData();
  const { auth } = useAuth();

  const handleCRUD = (func, message, type, funcParam1) => {
    if (auth.isAuth) {
      func(funcParam1, dispatch);
      toastRef.current.show();
      getData(message, type);
      setShowMenu(false);
    } else {
      toastRef.current.show();
      getData('Login First!!', 'fail');
      setShowMenu(false);
    }
  };

  const videoPresent = dataState.watchLater?.find(i => i._id === video._id);

  return (
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

      <span className="f-6 w-100 menu-item pointer">
        <i className="fa-regular fa-folder f-8 p-h-2 "></i>
        Add to Playlist
      </span>
      {children}
    </div>
  );
}

export { VideoMenu };
