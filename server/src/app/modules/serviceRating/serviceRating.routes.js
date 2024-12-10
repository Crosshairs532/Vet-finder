import { Router } from "express";
import { serviceRatingController } from "./serviceRating.controller.js";
const router = Router();

router.post(
  "/create-service-rating",
  serviceRatingController.serviceRatingCreate
);
export const ServiceRatingRoutes = router;
