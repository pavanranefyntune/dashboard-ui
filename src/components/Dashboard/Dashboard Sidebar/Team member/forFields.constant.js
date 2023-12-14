const formFields = [
  {
    name: "name",
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
    type: "text",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  {
    name: "status",
    type: "text",
    label: "Status",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
  },
];

export default formFields;
