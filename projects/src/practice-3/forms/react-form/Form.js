import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  console.log(name, surname);

  function handleChange1(event) {
    setName(event.target.value);
  }

  function handleChange2(event) {
    setSurname(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange1}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your surname"
        onChange={handleChange2}
      />
    </form>
  );
};

export default Form;
