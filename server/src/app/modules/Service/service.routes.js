import { Router } from "express";
import { serviceController } from "./service.controller.js";

const router = Router();

router.post("/create-service", serviceController.serviceCreate);
router.get("/", serviceController.getServices);
export const ServiceRoutes = router;
