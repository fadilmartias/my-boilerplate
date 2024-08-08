export const successRes = (
  res,
  data = null,
  message = "Success",
  statusCode = 200,
  pagination = null
) => {

  const responseData = {
    success: true,
    message: message,
  };
  if (pagination !== null) {
    responseData.pagination = pagination;
  }
  if (data !== null) {
    responseData.data = data;
  }

  return res.status(statusCode).json(responseData).end();
};

export const errorRes = (
  res,
  errors = null,
  message = "Internal Server Error",
  statusCode = 500,
) => {
  const responseData = {
    success: false,
    message: message,
  };

  if (errors !== null) {
    responseData.errors = errors;
  }

  return res.status(statusCode).json(responseData).end();
};
