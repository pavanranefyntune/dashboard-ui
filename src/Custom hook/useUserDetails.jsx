import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const useUserDetails = () => {
   
    const queryClient = useQueryClient()
  const token = localStorage.getItem("token");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://uatapicorporatetravel.fynity.in/api/user",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data

    } catch (error) {
      console.log("error fetching User", error);
      throw error;
    }
  };

  const service  = useQuery({
    queryKey: ["User"],
    queryFn: fetchUser,
    staleTime: 100000,
    retry: 0
  });
 
  const cacheData = queryClient.getQueryData(["User"]);
  return {service, cacheData};
};

export default useUserDetails;