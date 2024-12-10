import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { vetService } from "./vetService.service.js";

const vetServiceCreate = catchAsync(async (req, res) => {
  const result = await vetService.vetServiceDB(req.body);

  sendResponse(res, {
    success: true,
    message: "Vet Service Created successfully",
    data: result,
  });
});
export const vetServiceController = {
  vetServiceCreate,
};
