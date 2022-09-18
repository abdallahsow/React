import React, { useState } from "react";
import intels from "./intels";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
    
    

  return <Form key={name} {...intels} handleChange={trackchange} />;
}
