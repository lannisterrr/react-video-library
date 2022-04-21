import { useReducer } from 'react';
import { UserNote } from './UserNote';

// const initialState = {
//   notes: [],
//   title: '',
//   textarea: '',
// };

function Notes() {
  //   const [notesState, dispatch] = useReducer(notesReducer, initialState);
  return (
    <div className="single-video__notes-container">
      <p className="heading-4 center-text t-c-3">Add Notes :</p>
      <div className="note__input-field">
        <input
          type="text"
          placeholder="Title..."
          className="note__input p-v-4"
        />
        <textarea
          name="notes-text"
          id=""
          cols="30"
          rows="10"
          placeholder="Description..."
          className="note__input note__input-textarea"
        ></textarea>
        <div className="input-field__button-container">
          <button className="input-field__button m-h-4">Save</button>
          <button className="input-field__button">Discard</button>
        </div>
      </div>
      <UserNote />
    </div>
  );
}

export { Notes };
