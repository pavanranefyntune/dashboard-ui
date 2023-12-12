import users from "../users.constant";
import { useState } from "react";

function useTable() {
  const [usersData, setUsersData] = useState(users);

  return { usersData, setUsersData };
}

export default useTable;
