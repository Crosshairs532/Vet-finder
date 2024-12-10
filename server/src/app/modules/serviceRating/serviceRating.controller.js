import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { serviceRatingService } from "./serviceRating.service.js";

const serviceRatingCreate = catchAsync(async (req, res) => {
  const result = await serviceRatingService.serviceRatingCreateDB(req.body);
  sendResponse(res, {
    success: true,
    message: "Service rating Created successfully",
    data: result,
  });
});

export const serviceRatingController = {
  serviceRatingCreate,
};
