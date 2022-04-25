import { v4 as uuid } from 'uuid';

import { useReducer } from 'react';
import { UserNote } from './UserNote';

const initialState = {
  notes: [
    {
      _id: uuid(),
      title: 'Hyphotesis exercise',
      description:
        ' This is what I refer to as experimentation and hypothesis-testing. Experimentation can have somewhat of a negative connotation to some,indicating engagement in “impulsive” types of behaviors (e.g., sex,drugs, gambling).',
      videoTimeStamp: '1:04',
    },
  ],
  title: '',
  textArea: '',
  errorShow: false,
};

function Notes({ videoRef, videoId }) {
  const notesReducer = (state, action) => {
    switch (action.type) {
      case 'TEXT_INPUT':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
          errorShow: false,
        };

      case 'SAVE_NOTES':
        return {
          ...state,
          notes: [
            ...state.notes,
            {
              _id: videoId,
              title: state.title,
              description: state.textArea,
              videoTimeStamp: videoRef.current.getCurrentTime(),
            },
          ],
          title: '',
          textArea: '',
        };

      case 'CLEAR_INPUT':
        return initialState;

      case 'ERROR_SHOW':
        return {
          ...state,
          errorShow: true,
        };

      case 'DELETE_NOTES':
        const filteredNotes = state.notes.filter(
          note => note._id !== action.payload
        );
        return {
          ...state,
          notes: filteredNotes,
        };

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };
  const [notesState, dispatch] = useReducer(notesReducer, initialState);

  const handleAddNotes = () => {
    if (!notesState.title.length || !notesState.textArea.length) {
      dispatch({ type: 'ERROR_SHOW' });
    } else {
      dispatch({
        type: 'SAVE_NOTES',
      });
    }
  };

  return (
    <div className="single-video__notes-container">
      <p className="heading-4 center-text t-c-3">Add Notes :</p>
      <div className="note__input-field">
        <input
          type="text"
          onChange={e =>
            dispatch({
              type: 'TEXT_INPUT',
              payload: { key: 'title', value: e.target.value },
            })
          }
          placeholder="Title..."
          className="note__input p-v-4"
          value={notesState.title}
        />
        <textarea
          name="notes-text"
          onChange={e =>
            dispatch({
              type: 'TEXT_INPUT',
              payload: { key: 'textArea', value: e.target.value },
            })
          }
          id=""
          cols="30"
          rows="10"
          placeholder="Description..."
          value={notesState.textArea}
          className="note__input note__input-textarea"
        ></textarea>
        <div className="input-field__button-container p-v-4">
          {notesState.errorShow && (
            <p className="f-5 t-c-3 f-bold m-r-auto">Field is Empty</p>
          )}
          <button
            onClick={handleAddNotes}
            className="input-field__button  m-h-4"
          >
            Save
          </button>
          <button
            onClick={() => dispatch({ type: 'CLEAR_INPUT' })}
            className="input-field__button "
          >
            Discard
          </button>
        </div>
      </div>
      {notesState.notes.map(note => (
        <UserNote key={note._id} note={note} dispatch={dispatch} />
      ))}
    </div>
  );
}

export { Notes };
