import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function useLogout() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logoutUser = async () => {
    const response = await axios.post(
      "https://uatapicorporatetravel.fynity.in/api/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  };

  const logoutMutation = useMutation({
    mutationFn: () => {
      return logoutUser();
    },
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return { handleLogout };
}

export default useLogout;
