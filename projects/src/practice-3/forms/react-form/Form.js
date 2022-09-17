import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  function handleChange() {
    console.log("Changed");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
