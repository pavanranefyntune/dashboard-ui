import axios from  "axios";
function useLogout(){
  
   const token = localStorage.getItem("token");
 
   const logoutUser = async () => {
    
    const response = await axios.post("https://uatapicorporatetravel.fynity.in/api/logout",{} , {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
    }
    )
     return response
   }
     
   return {logoutUser};
  }

export default useLogout