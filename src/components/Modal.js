import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Checkbox } from './Checkbox';
import { useClickOutside } from '../customHooks/useClickOutside';
import reactDom from 'react-dom';

const Modal = forwardRef((props, ref) => {
  const [modalShow, setModalShow] = useState(false);
  console.log(ref);
  let domNode = useClickOutside(() => hide());
  const hide = () => setModalShow(false);

  useImperativeHandle(ref, () => ({
    show() {
      setModalShow(true);
    },
    hide,
  }));

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
          <Checkbox title={'Add to watch Later'} />
        </div>
        <div className="video-lib__add-playlist p-4">
          <label htmlFor="playList-name" className="t-c-3 f-5 p-2 f-bold">
            Name:
          </label>
          <input type="text" className="note__input p-v-4" />
        </div>
        <div className="modal-button-container p-4">
          <button className="input-field__button">+ Create new Playlist</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
});

export { Modal };
