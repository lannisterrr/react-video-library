import React from 'react';

function UserNote({ note }) {
  console.log(note);
  return (
    <div className="user-note  p-h-3">
      <div className="user-note__header">
        <p className="f-6 video-lib-text-2">{note.title}</p>
        <span className="user-note__time-stamp f-8">
          <i className="fa-regular fa-clock f-8 p-h-2"></i>
          {note.videoTimeStamp}
        </span>
      </div>
      <p className="f-6 video-lib-text-1">{note.description}</p>
      <div className="user-note__btn">
        <span className="m-h-2">
          <i className="fa-solid fa-pen f-7  pointer"></i>
        </span>
        <span className="m-h-2">
          <i className="fa-solid fa-trash f-7  pointer"></i>
        </span>
      </div>
    </div>
  );
}

export { UserNote };
