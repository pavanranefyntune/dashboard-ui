import AddUserModal from "./AddUserModal";
import Users from "./Users";
import { useState } from "react";
import users from "../../MOCK_DATA";
import Active from "./Active";
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
      <Users openModal={openModal} data={usersData} Active={Active} setUsersData={setUsersData} />
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
