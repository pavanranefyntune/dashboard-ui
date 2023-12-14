import AddUserModal from "./AddUserModal";
import Users from "./Users";
import { useState } from "react";
import useTable from "./custom hooks/useTable";

import Active from "./Active";
import { Toaster } from "react-hot-toast";
const Index = () => {
  const [show, setShow] = useState(false);

  const { usersData, setUsersData } = useTable();

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
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

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
