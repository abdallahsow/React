import React from "react";

const Form = ({ type, placeholder, name, handleChange }) => {
  return (
    <>
      <label for={name}>{name}</label>
      <input
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
