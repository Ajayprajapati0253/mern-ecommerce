const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200
    ? res.statusCode
    : 500;

  const isProduction = process.env.NODE_ENV === "production";

  res.status(statusCode).json({
    message: statusCode === 500 && isProduction
      ? "Internal server error"
      : err.message,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
