import AddUserModal from "./AddUserModal";
import Users from "./Users";
import { useState } from "react";
import users from "../../MOCK_DATA";
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
    <div>
      <Users openModal={openModal} data={usersData} />
      {show && (
        <AddUserModal
          closeModal={closeModal}
          setUsersData={setUsersData}
          usersData={usersData}
        />
      )}
    </div>
  );
};

export default Index;
