import axios from "axios";
import { env } from "../config/env";
import { normalizeApiError } from "./api-error";

const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
  timeout: 30_000,
  headers: {
    Accept: "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add common request configuration here when required.
    return config;
  },
  (error: unknown) => Promise.reject(error),
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    return Promise.reject(normalizeApiError(error));
  },
);

export default axiosInstance;