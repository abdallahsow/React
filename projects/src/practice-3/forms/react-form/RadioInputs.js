const Radio = ({ type, id, labelName, name, value, handleChange }) => {
  return (
    <>
      <input
        className="radio"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{labelName}</label>
      <br />
    </>
  );
};

export default Radio;
