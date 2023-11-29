import {useNavigate} from "react-router-dom";
import useUserDetails from "./Custom hook/useUserDetails";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Authenticated = ({children}) => {

 const {service} = useUserDetails();
 const navigate = useNavigate();
 
 useEffect(() => {

  if(service.status == "error") {
    navigate("/login")
  } 
  else {
    navigate("/")
  }
     
 },[service.status])
 
 if (service.isLoading) {
       return <div>Loading...</div>
 }
   return children
  
}
export default Authenticated;