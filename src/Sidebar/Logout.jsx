import { FiLogOut } from "react-icons/fi";
import useLogout from "../Custom hook/useLogout";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const Logout = () => {

  const {logoutUser} = useLogout();
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess : () => {
        localStorage.removeItem("token");
        navigate("/login")
    }
  }) 

  const handleLogout = () => {
    logoutMutation.mutate()
  }
     
  return (
    <button className="flex gap-1 items-center"
    onClick={handleLogout}
    >
        <FiLogOut />
          Log Out
    </button>
  )
}

export default Logout;