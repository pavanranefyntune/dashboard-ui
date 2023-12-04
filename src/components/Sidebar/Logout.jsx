import { FiLogOut } from "react-icons/fi";
import useLogout from "../Sidebar/logout/custom hooks/useLogout";

const Logout = () => {

  const { handleLogout} = useLogout();

  return (
   <>
     <button className="flex gap-1 items-center"
    onClick={handleLogout}
    >
        <FiLogOut />
          Log Out
    </button>
   </>
  )
}

export default Logout;