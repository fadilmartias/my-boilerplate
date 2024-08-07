export const successRes = (
  res,
  data,
  message = "Success",
  statusCode = 200
) => {
  const responseData = {
    success: 1,
    rc: statusCode,
    message: message,
    data: data,
  };

  return res.status(statusCode).json(responseData).end();
};

export const errorRes = (
  res,
  errors,
  message = "Internal Server Error",
  statusCode = 500,
) => {
  const responseData = {
    success: 0,
    rc: statusCode,
    message: message,
  };

  if (errors !== undefined && errors !== null && errors.length > 0 && errors !== "") {
    responseData.errors = errors;
  }

  return res.status(statusCode).json(responseData).end();
};
