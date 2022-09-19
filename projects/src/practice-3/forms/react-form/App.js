import React, { useState } from "react";
import intels from "./intels";
import Form from "./Form";
import "./style.css";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    comments: "",
  });

  console.log(formData);

  const trackChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      {intels.map((intel) => (
        <Form key={intel.name} {...intel} handleChange={trackChange} />
      ))}
      <label htmlFor="comments">Comments</label>
      <textarea
        name="comments"
        placeholder="Comments!"
        onChange={trackChange}
        className="textarea"
      />
    </form>
  );
}
