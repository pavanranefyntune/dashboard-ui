import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

function useUserDetails() {
   
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
      return error;
    }
  };

  const service  = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser
  });
 
  const cacheData = queryClient.getQueryData(["user"]);

  return {service, cacheData};
}

export default useUserDetails;