import axios from 'axios';

// Create your Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com', // Change to your API base URL
  timeout: 10000,
  // ...other config
});

// Error handler function
const errorHandler = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('Error Response:', error.response.data);
    // Optionally, show a user-friendly message or handle specific status codes
  } else if (error.request) {
    // Request was made but no response received
    console.error('No Response:', error.request);
  } else {
    // Something else happened
    console.error('Error:', error.message);
  }
  // Optionally, return a rejected promise to propagate the error
  return Promise.reject(error);
};

// Attach the error handler to the response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  errorHandler
);

export default axiosInstance;