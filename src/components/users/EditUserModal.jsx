/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import UserForm from "../Forms/UserForm";
const EditUserModal = ({ show, setShow, row, data, setUsersData }) => {
  const { id, first_name, email, gender, username } = row.original;

  const editIndex = data?.findIndex((item) => item.id === id);

  const handleUpdate = (userData) => {
    const updatedUsers = [...data];
    updatedUsers.splice(editIndex, 1, userData);
    setUsersData(updatedUsers);
    setShow(!show);
  };

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
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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

  const defaultValues = {
    first_name: first_name || "",
    email: email || "",
    gender: gender || "",
    username: username || "",
  };

  return (
    <div
      className={
        "fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90"
      }
    >
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="bg-white  rounded shadow-lg p-4">
          <div className="flex justify-between p-4">
            <p className="text-center font-bold text-md mt-[-10px]">
              Edit User
            </p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
              onClick={() => setShow(!show)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <UserForm
            onSubmit={handleUpdate}
            formFields={formFields}
            defaultValues={defaultValues}
          />
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
