function Checkbox({ id, title, handleCheckboxChange, booleanChecked, name }) {
  return (
    <>
      <label htmlFor={id} className="checkbox f-6 p-h-4">
        <input
          onChange={handleCheckboxChange}
          className="checkbox__input"
          type="checkbox"
          id={id}
          checked={booleanChecked}
          name={name}
        />
        <div className="checkbox__box"></div>
        {title}
      </label>
    </>
  );
}

export { Checkbox };
