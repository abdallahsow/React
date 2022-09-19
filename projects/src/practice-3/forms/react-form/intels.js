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
    value: "full-time",
    labelName: "Full-time",
    name: "employment",
  },
  {
    type: "radio",
    id: "part-time",
    labelName: "Part-time",
    name: "employment",
    value: "part-time",
  },
  {
    type: "radio",
    id: "freelance",
    value: "freelance",
    labelName: "Free-lance",
    name: "employment",
  },
  {
    type: "radio",
    id: "internship",
    value: "internship",
    labelName: "Internship",
    name: "employment",
  },
  {
    type: "radio",
    id: "unemployed",
    value: "unemployed",
    labelName: "Unemployed",
    name: "employment",
  },
];

export default data;
export { radioData };
