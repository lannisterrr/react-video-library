function Checkbox({ id, title, handleCheckboxChange, defaultChecked, name }) {
  return (
    <>
      <label htmlFor={id} className="checkbox f-6 p-h-4 m-v-2">
        <input
          onChange={handleCheckboxChange}
          className="checkbox__input"
          type="checkbox"
          id={id}
          defaultChecked={defaultChecked}
          name={name}
        />
        <div className="checkbox__box"></div>
        {title}
      </label>
    </>
  );
}

export { Checkbox };
