import type { AxiosRequestConfig } from "axios";
import axiosInstance from "./axios";

type RequestConfig = Omit<
  AxiosRequestConfig,
  "url" | "method" | "data"
>;

interface UploadOptions extends RequestConfig {
  onProgress?: (percentage: number) => void;
  fieldName?: string;
}

export const apiClient = {
  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  },

  async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T> {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  },

  async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T> {
    const response = await axiosInstance.put<T>(url, data, config);
    return response.data;
  },

  async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T> {
    const response = await axiosInstance.patch<T>(url, data, config);
    return response.data;
  },

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    const response = await axiosInstance.delete<T>(url, config);
    return response.data;
  },

  async upload<T>(
    url: string,
    file: File,
    options?: UploadOptions,
  ): Promise<T> {
    const {
      onProgress,
      fieldName = "file",
      ...config
    } = options ?? {};

    const formData = new FormData();
    formData.append(fieldName, file);

    const response = await axiosInstance.post<T>(url, formData, {
      ...config,
      onUploadProgress: (event) => {
        if (!onProgress || !event.total) {
          return;
        }

        const percentage = Math.round(
          (event.loaded / event.total) * 100,
        );

        onProgress(percentage);
      },
    });

    return response.data;
  },
};