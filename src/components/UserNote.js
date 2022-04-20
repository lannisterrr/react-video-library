import React from 'react';

function UserNote() {
  return (
    <div className="user-note  p-h-3">
      <div className="user-note__header">
        <p className="f-6 video-lib-text-2">Hyphotesis exercise</p>
        <span className="user-note__time-stamp f-8">
          <i className="fa-regular fa-clock f-8 p-h-2"></i>
          1:04
        </span>
      </div>
      <p className="f-6 video-lib-text-1">
        This is what I refer to as experimentation and hypothesis-testing.
        Experimentation can have somewhat of a negative connotation to some,
        indicating engagement in “impulsive” types of behaviors (e.g., sex,
        drugs, gambling).
      </p>
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
