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
    </form>
  );
}
