import React, { useState } from "react";
import intels from "./intels";
import Form from "./Form";
import "./style.css";
import { radioData } from "./intels";
import Radio from "./RadioInputs";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    comments: "",
    isFriendly: false,
    employment: "",
  });

  console.log(formData.employment);

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
      <br />
      <br />
      <fieldset>
        <legend>Current Employment Status</legend>
        {radioData.map((radio) => (
          <Radio key={radio.id} {...radio} handleChange={trackChange} />
        ))}
      </fieldset>
    </form>
  );
}
