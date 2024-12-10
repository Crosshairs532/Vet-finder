export const sendResponse = (res, result) => {
  return res.status(200).json({
    success: result.success,
    message: result.message,
    data: result.data,
  });
};
