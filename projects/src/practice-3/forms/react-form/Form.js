import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: '',
  });

  function handleChange(event) {
    setFormData(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        name="firstName"
      />
      <br />
      <input
        type="text"
        placeholder="Enter your surname"
        onChange={handleChange}
        name="lastName"
      />
    </form>
  );
};

export default Form;
