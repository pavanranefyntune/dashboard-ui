import axios from  "axios";
const useLogout = () => {
  
   const token = localStorage.getItem("token");

   const logoutUser = async () => {
    const response = await axios.post("https://uatapicorporatetravel.fynity.in/api/logout" , {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
    }
    )
     return response.data
   }

  return (
    <div></div>
  )
}

export default useLogout