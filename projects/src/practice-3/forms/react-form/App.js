import React, { useState } from "react";
import intels from "./intels";
import Form from "./Form";
import "./style.css";
import { radioData, select } from "./intels";
import Radio from "./RadioInputs";
import Option from "./SelectOption";

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
    favColor: "",
  });

  console.log(formData);

  const trackChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const form = intels.map((intel) => (
    <Form key={intel.name} {...intel} handleChange={trackChange} />
  ));

  const radio = radioData.map((radio) => (
    <Radio key={radio.id} {...radio} handleChange={trackChange} />
  ));

  const selectData = select.map((select) => (
    <Option key={select.value} {...select} />
  ));

  return (
    <form>
      {form}
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
        {radio}
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favorite color ?</label>
      <br />
      <select
        name="favColor"
        id="favColor"
        className="input"
        onChange={trackChange}
        value={formData.favColor}
      >
        {selectData}
      </select>
    </form>
  );
}
