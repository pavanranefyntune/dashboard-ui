import AddUserModal from "./AddUserModal";
import Users from "./Users";
import { useState } from "react";
import users from "../../MOCK_DATA";
import Active from "./Active";
import { Toaster } from "react-hot-toast";
const Index = () => {
  const [show, setShow] = useState(false);
  const [usersData, setUsersData] = useState(users);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="mt-8">
      <Users
        openModal={openModal}
        data={usersData}
        Active={Active}
        setUsersData={setUsersData}
      />
      {show && (
        <AddUserModal
          closeModal={closeModal}
          setUsersData={setUsersData}
          usersData={usersData}
        />
      )}
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default Index;
