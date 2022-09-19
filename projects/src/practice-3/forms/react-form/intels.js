const data = [
  {
    labelName: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    name: "firstName",
  },
  {
    labelName: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    name: "lastName",
  },
  {
    labelName: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    labelName: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
  },
  {
    labelName: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    name: "phone",
  },
];

const radioData = [
  {
    type: "radio",
    id: "full-time",
    labelName: "Full-time",
  },
  {
    type: "radio",
    id: "part-time",
    labelName: "Part-time",
  },
  {
    type: "radio",
    id: "freelance",
    labelName: "Free-lance",
  },
  {
    type: "radio",
    id: "internship",
    labelName: "Internship",
  },
  {
    type: "radio",
    id: "Unemployed",
    labelName: "Unemployed",
  },
];

export default data;
export { radioData };
