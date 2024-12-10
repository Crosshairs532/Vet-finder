import { sendResponse } from "../../utils/sendResponse.js";
import { serviceService } from "./service.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
const serviceCreate = catchAsync(async (req, res) => {
  const result = await serviceService.serviceCreateDB(req.body);

  sendResponse(res, {
    success: true,
    message: "Service Created successfully",
    data: result,
  });
});
const getServices = catchAsync(async (req, res) => {
  const result = await serviceService.getServicesDB();

  sendResponse(res, {
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});

export const serviceController = {
  serviceCreate,
  getServices,
};
