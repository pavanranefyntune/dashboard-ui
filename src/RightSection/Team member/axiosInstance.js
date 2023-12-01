import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://gorest.co.in/public/v2/users", 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
      }
     });

     export default axiosInstance;