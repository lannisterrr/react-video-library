import { useReducer, useState } from 'react';
import { UserNote } from './UserNote';
import { v4 as uuid } from 'uuid';
import NoteInput from './NoteInput';

const initialState = {
  notes: [],
  errorShow: false,
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_NOTES':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case 'EDIT_NOTE':
      const selectedNote = state.notes.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
      console.log(selectedNote);
      return {
        notes: selectedNote,
      };

    case 'CLEAR_INPUT':
      return initialState;

    case 'ERROR_SHOW':
      return {
        ...state,
        errorShow: action.payload,
      };

    case 'DELETE_NOTES':
      const filteredNotes = state.notes.filter(
        note => note.id !== action.payload
      );
      return {
        ...state,
        notes: filteredNotes,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function Notes({ videoRef, videoId }) {
  const [curr_note, setCurr_note] = useState({});
  const [notesState, dispatch] = useReducer(notesReducer, initialState);

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setCurr_note(prev_note => ({ ...prev_note, [name]: value }));
  };

  const handleAddNotes = () => {
    if (!curr_note.title || !curr_note.description) {
      dispatch({ type: 'ERROR_SHOW', payload: true });
      setTimeout(() => {
        dispatch({ type: 'ERROR_SHOW', payload: false });
      }, 1200);
      return;
    } else {
      if (curr_note.id) {
        dispatch({ type: 'EDIT_NOTE', payload: curr_note });
      } else {
        dispatch({
          type: 'SAVE_NOTES',
          payload: {
            id: uuid(),
            videoId: videoId,
            videoTimeStamp: videoRef.current.getCurrentTime(),
            ...curr_note,
          },
        });
      }
      setCurr_note({});
    }
  };

  return (
    <div className="single-video__notes-container">
      <p className="heading-4 center-text t-c-3">Add Notes :</p>
      <NoteInput
        curr_note={curr_note}
        handleInputChange={handleInputChange}
        handleAddNotes={handleAddNotes}
        dispatch={dispatch}
        notesState={notesState}
      />
      {notesState.notes.length > 0 ? (
        notesState.notes.map(note => (
          <UserNote
            key={note._id}
            note={note}
            setCurr_note={setCurr_note}
            dispatch={dispatch}
          />
        ))
      ) : (
        <p className="p-2 f-7 t-c-4 center-text ">Add a Note!!!</p>
      )}
    </div>
  );
}

export { Notes };
