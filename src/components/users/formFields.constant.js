const formFields = [
  {
    name: "first_name",
    type: "text",
    placeholder: "Enter First Name",
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Please enter a valid name",
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/,
      message: "Please enter a valid Email",
    },
  },
  {
    name: "gender",
    type: "radio",
    label: "Gender",
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
  },
  {
    name: "username",
    type: "text",
    placeholder: "Enter Username",
    pattern: {
      value: /^[a-zA-Z0-9_.]{3,30}$/,
      message: "Please enter a valid username",
    },
  },
];

export default formFields;
