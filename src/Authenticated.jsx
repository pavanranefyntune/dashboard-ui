import {useNavigate} from "react-router-dom"

const Authenticated = ({children}) => {

 const navigate = useNavigate();
 const token  = localStorage.getItem("token")

 if (!token) {
        navigate("/login");
 }
   return children
  
}
export default Authenticated;