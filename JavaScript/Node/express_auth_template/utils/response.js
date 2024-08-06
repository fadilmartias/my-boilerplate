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
  data,
  message = "Internal Server Error",
  statusCode = 500
) => {
  const responseData = {
    success: 0,
    rc: statusCode,
    message: message,
  };

  if (data !== undefined && data !== null && data.length > 0 && data !== "") {
    responseData.data = data;
  }

  return res.status(statusCode).json(responseData).end();
};
