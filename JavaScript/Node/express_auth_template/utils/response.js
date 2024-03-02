export const successRes = (data, message, res, statusCode = 200) => {
  return res.json({
    status: 1,
    rc: statusCode,
    message: message,
    data: data,
    metadata: {
      prev: "",
      next: "",
      current: "",
    },
  });
};

export const errorRes = (data, message, res, statusCode) => {
  return res.json({
    status: 0,
    rc: statusCode,
    message: message,
    data: data,
  });
};
