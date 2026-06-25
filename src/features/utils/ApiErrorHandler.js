import ApiError from "./ApiError";

const apiErrorHandler = (error) => {
  if (error.code === "ECONNABORTED") {
    throw new ApiError("Request timed out. Please try again.", 408);
  }
  if (error.response) {
    const { status, data } = error.response;
    const message = data?.message || "Server error occurred";
    const errors = data?.errors || [];

    // GitHub rate limit specific
    if (status === 403 && message.includes("rate limit")) {
      throw new ApiError("GitHub API rate limit exceeded.", 429, errors);
    }
    // [FUTURE BACKEND]: Add 401 unauthorized case here if needed
    throw new ApiError(message, status, errors);
  }
  if (error.request) {
    throw new ApiError("Network error: Server not reachable", 503);
  }
  throw new ApiError("Something went wrong", 500);
};

export default apiErrorHandler;