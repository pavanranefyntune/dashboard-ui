/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import UserForm from "../Forms/UserForm";
const EditUserModal = ({ show, setShow, row, data, setUsersData }) => {
  const schema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    gender: yup
      .string()
      .oneOf(["Male", "Female"])
      .required("Gender is required"),
    username: yup.string().required("Username is required"),
  });

  const { id, first_name, email, gender, username } = row.original;

  const editIndex = data?.findIndex((item) => item.id === id);

  const handleUpdate = (userData) => {
    const updatedUsers = [...data];
    updatedUsers.splice(editIndex, 1, userData);
    setUsersData(updatedUsers);
    setShow(!show);
  };

  const formFields = [
    { name: "first_name", type: "text", placeholder: "Enter First Name" },
    { name: "email", type: "email", placeholder: "Enter Email" },
    { name: "gender", type: "radio", placeholder: "Enter Gender" },
    { name: "username", type: "text", placeholder: "Enter Username" },
  ];

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
            schema={schema}
            first_name={first_name}
            email={email}
            gender={gender}
            username={username}
          />
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
