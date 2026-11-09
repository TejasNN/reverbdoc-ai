import axios from "axios";
import type { ApiErrorResponse } from "../types/api";

export class ApiError extends Error {
    public readonly status?: number;
    public readonly code?: string;
    public readonly details?: unknown;

    constructor(
        message: string,
        status?: number,
        code?: string,
        details?: unknown,
    ) {
        super(message);

        this.name = "ApiError";
        this.status = status;
        this.code = code;
        this.details = details;

        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

export function normalizeApiError(error: unknown): ApiError {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const response = error.response;
    const responseData = response?.data;

    if (responseData && typeof responseData === "object") {
      return new ApiError(
        responseData.message || "The server returned an error.",
        response?.status,
        responseData.code,
        responseData.errors,
      );
    }

    if (response) {
      return new ApiError(
        "The request could not be completed.",
        response.status,
        error.code,
      );
    }

    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      return new ApiError("The request timed out.", undefined, error.code);
    }

    return new ApiError(
      "Unable to connect to the server. Please check your connection.",
      undefined,
      error.code,
    );
  }

  if (error instanceof Error) {
    return new ApiError(error.message);
  }

  return new ApiError("An unexpected error occurred.");
}