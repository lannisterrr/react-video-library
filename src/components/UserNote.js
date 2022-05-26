import NoteInput from './NoteInput';

function UserNote({ note, dispatch, setCurr_note }) {
  const getTime = () => {
    const totalSeconds = note.videoTimeStamp;
    if (isNaN(totalSeconds)) return totalSeconds;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds - minutes * 60);
    return `${minutes} : ${seconds}`;
  };

  const handleNoteEdit = () => {
    setCurr_note(note);
  };

  return (
    <div className="user-note  p-h-3">
      <div className="user-note__header">
        <p className="f-6 video-lib-text-2">{note.title}</p>
        <span className="user-note__time-stamp f-8">
          <i className="fa-regular fa-clock f-8 p-h-2"></i>
          {getTime()}
        </span>
      </div>
      <p className="f-6 video-lib-text-1">{note.description}</p>
      <div className="user-note__btn">
        <span className="m-h-2">
          <i
            onClick={handleNoteEdit}
            className="fa-solid fa-pen f-7 pointer"
          ></i>
        </span>
        <span className="m-h-2">
          <i
            onClick={() => dispatch({ type: 'DELETE_NOTES', payload: note.id })}
            className="fa-solid fa-trash f-7  pointer"
          ></i>
        </span>
      </div>
    </div>
  );
}

export { UserNote };
