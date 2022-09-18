const Form = ({ type, placeholder, name, handleChange, labelName }) => {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        id={name}
      />
      <br />
    </>
  );
};

export default Form;
