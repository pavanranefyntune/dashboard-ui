import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const AddUserModal = ({ closeModal, setUsersData, usersData }) => {
  const [formData, setFormData] = useState({
    id: usersData.length + 1,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    username: "",
  });
  const handleSubmit = () => {
    setUsersData((usersData) => [formData, ...usersData]);
    closeModal();
    console.log(usersData);
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
            <p className="text-center font-bold text-md mt-[-10px]">Add User</p>
            <button
              className="text-gray-500 hover:text-gray-700 mt-[-45px] mr-[-20px]"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex justify-end"></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-2"
          >
            <div>
              <input
                type="text"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    first_name: e.target.value,
                  }))
                }
                placeholder="Enter First Name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    last_name: e.target.value,
                  }))
                }
                placeholder="Enter Last Name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                placeholder="Enter Email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label>Gender:</label>
              <div>
                <input
                  type="radio"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                />
                <label htmlFor="male" className="ml-1">
                  Male
                </label>

                <input
                  type="radio"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                  className="ml-4"
                />
                <label htmlFor="female" className="ml-1">
                  Female
                </label>
              </div>
            </div>
            <div>
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
                placeholder="Enter Username"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
