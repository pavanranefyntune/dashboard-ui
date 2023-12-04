import axios from "axios";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BASE_MEMBERS_API_URL, 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_BASE_MEMBERS_API_KEY}`,
      }
     });

     export default axiosInstance;