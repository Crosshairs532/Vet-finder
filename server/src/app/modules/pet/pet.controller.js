import { catchAsync } from "../../utils/catchAsync.js";
import { petServices } from "./pet.service.js";
import { sendResponse } from "../../utils/sendResponse.js";

const createPet = catchAsync(async (req, res) => {
  console.log("heloo");
  const result = await petServices.petCreateDB(req.body);
  sendResponse(res, {
    success: true,
    message: "Pet Created successfully",
    data: result,
  });
});
const updatePet = catchAsync(async (req, res) => {
  const { id } = req.query;
  const result = await petServices.petUpdateDb(id, req.body);
  sendResponse(res, {
    success: true,
    message: "Pet updated successfully",
    data: result,
  });
});

export const petController = {
  createPet,
  updatePet,
};
