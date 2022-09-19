import "./style.css";
import details from "./input-infos";
import { useState } from "react";
import Input from "./Input";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    // const { name, value, checked } = event.target;
    console.log(formData);
  };

  const inputs = details.map((detail) => (
    <Input key={detail.name} {...detail} updatingFunc={handleChange} />
  ));

  return (
    <div className="form-container">
      <form className="form">
        {inputs}
        <div className='form-marketing'>
          <input type="checkbox" id="okayToEmail" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
              </div>
        <button className="form-button">Sign Up</button>
      </form>
    </div>
  );
}
