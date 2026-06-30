import axios from "axios";
import apiErrorHandler from "../features/utils/ApiErrorHandler";


const BASE_RETRY_COUNT = 2;
const RETRY_STATUS_CODES = [503, 429];



const devtoAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEV_URI,
  timeout: 12000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});



devtoAxiosInstance.interceptors.request.use(
  (config) => {
    config._retryCount = config._retryCount ?? 0;
    return config;
  },
  (error) => Promise.reject(error)
);



devtoAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config ?? {};
    const status = error.response?.status;
    if ( RETRY_STATUS_CODES.includes(status) && config._retryCount < BASE_RETRY_COUNT) {
      config._retryCount += 1;
      const delay = 1000 * config._retryCount; 
      await new Promise((res) => setTimeout(res, delay));
      return devtoAxiosInstance(config);
    }
    return Promise.reject(apiErrorHandler(error));
  }
);





export default devtoAxiosInstance;