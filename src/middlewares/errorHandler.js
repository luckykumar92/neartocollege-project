import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const { statusCode, message, errors, success } = err;
    res.status(statusCode).json({
      success,
      message,
      errors,
    });
  } else {
    // Handle other types of errors or unhandled exceptions
    // console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errors: [],
    });
  }
};

export default errorHandler;
