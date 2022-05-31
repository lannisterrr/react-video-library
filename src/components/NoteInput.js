function NoteInput({
  curr_note,
  handleInputChange,
  handleAddNotes,
  dispatch,
  notesState,
}) {
  return (
    <div className="note__input-field">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Title..."
        className="note__input p-v-4"
        name="title"
        value={curr_note.title ?? ''}
      />
      <textarea
        onChange={handleInputChange}
        id=""
        cols="30"
        rows="10"
        placeholder="Description..."
        name="description"
        value={curr_note.description ?? ''}
        className="note__input note__input-textarea"
      ></textarea>
      <div className="input-field__button-container p-v-4">
        {notesState.errorShow && (
          <p className="f-5 t-c-3 f-bold m-r-auto">Field is Empty</p>
        )}
        <button onClick={handleAddNotes} className="input-field__button  m-h-4">
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
  );
}

export default NoteInput;
