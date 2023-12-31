/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import UserForm from "../Forms/UserForm";
import { IoIosClose } from "react-icons/io";
import formFields from "./formFields.constant";

const AddUserModal = ({ closeModal, usersData, setUsersData }) => {
  const onSubmit = (data) => {
    const usernamePresent = usersData.some(
      (user) => user.username.toLowerCase() === data.username.toLowerCase()
    );
    if (usernamePresent) {
      toast.error(
        <div className="flex gap-2">
          <p>User Already Present</p>
          <button
            onClick={() => toast.dismiss()}
            className="border border-white rounded-full"
          >
            <IoIosClose />
          </button>
        </div>
      );
      closeModal();
    } else {
      setUsersData([data, ...usersData]);
      toast.success(
        <div className="flex gap-2">
          <p>User Added Successfully</p>
          <button
            onClick={() => toast.dismiss()}
            className="border border-white rounded-full"
          >
            <IoIosClose />
          </button>
        </div>
      );
      closeModal();
    }
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
            <p className="text-center font-bold text-md mt-[-10px] flex items-center">
              Add User
            </p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
          </div>
          <UserForm onSubmit={onSubmit} formFields={formFields} />
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
