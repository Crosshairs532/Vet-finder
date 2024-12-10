import { Router } from "express";
import { vetServiceController } from "./vetService.controller.js";

const router = Router();

router.post("/create-vet-service", vetServiceController.vetServiceCreate);
export const verServiceRoutes = router;
