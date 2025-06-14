//  axios ka instance bnao 
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000/api', // Base URL for the API
  timeout: 10000 // Request timeout in 10 sec.
  



});
export default axiosInstance;