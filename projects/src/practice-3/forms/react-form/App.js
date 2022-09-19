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
    isFriendly: false,
  });

  console.log(formData);

  const trackChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form>
      {intels.map((intel) => (
        <Form key={intel.name} {...intel} handleChange={trackChange} />
      ))}
      <label htmlFor="comments">Comments</label>
      <textarea
        id="comments"
        name="comments"
        placeholder="Comments!"
        onChange={trackChange}
        className="textarea"
        value={formData.comments}
      />
      <br />
      <input
        type="checkbox"
        name="isFriendly"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={trackChange}
        className="checkbox"
      />
      <label htmlFor="isFriendly">Are you friendly ?</label>
    </form>
  );
}
