import axios from "axios";
import apiErrorHandler from "../features/utils/ApiErrorHandler";

const BASE_RETRY_COUNT = 2;
const RETRY_STATUS_CODES = [503, 429];

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URI,
  // [FUTURE BACKEND]: baseURL: import.meta.env.VITE_API_BASE_URL

  timeout: 12000,
  withCredentials: false,
  // [FUTURE BACKEND]: withCredentials: true  (for cookie/session auth)

  headers: {
    "Content-Type": "application/json",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    // [FUTURE BACKEND]: Remove above 2 GitHub headers, keep only:
    // "Accept": "application/json"
  },
});



// ─── REQUEST INTERCEPTOR ────────────────────────────────────────────────────
axiosInstance.interceptors.request.use(
  (config) => {
    // CURRENT: GitHub token from .env
    // const token = import.meta.env.VITE_GITHUB_TOKEN;
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    // [FUTURE BACKEND — JWT]: token from localStorage
    // const token = localStorage.getItem("accessToken");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    // [FUTURE BACKEND — Cookie]: withCredentials:true upar set hai, yahan kuch nahi karna

    config._retryCount = config._retryCount ?? 0;
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── RESPONSE INTERCEPTOR ───────────────────────────────────────────────────
axiosInstance.interceptors.response.use(

  (response) => response,

  async (error) => {
    
    const config = error.config;

    const status = error.response?.status;

    // [FUTURE BACKEND — Token Refresh on 401]:
    // if (status === 401 && !config._retry) {
    //   config._retry = true;
    //   try {
    //     await axiosInstance.post("/auth/refresh");
    //     return axiosInstance(config);
    //   } catch {
    //     localStorage.removeItem("accessToken");
    //     window.location.href = "/login";
    //   }
    // }

    // Retry on 503 (server down) or 429 (rate limit)
    if (RETRY_STATUS_CODES.includes(status) && config._retryCount < BASE_RETRY_COUNT) {
      config._retryCount += 1;
      const delay = 1000 * config._retryCount; // 1s → 2s
      await new Promise((res) => setTimeout(res, delay));
      return axiosInstance(config);
    }

    return Promise.reject(apiErrorHandler(error));
  }
);

export default axiosInstance;