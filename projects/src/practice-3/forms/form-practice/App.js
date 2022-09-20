import "./style.css";
import details from "./input-infos";
import { useState } from "react";
import Input from "./Input";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    hasAccepted: false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const inputs = details.map((detail) => (
    <Input key={detail.name} {...detail} updatingFunc={handleChange} />
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, "Successful!");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {inputs}
        <div className="form-marketing">
          <input
            name="hasAccepted"
            type="checkbox"
            id="okayToEmail"
            checked={formData.checked}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form-button">Sign Up</button>
      </form>
    </div>
  );
}
