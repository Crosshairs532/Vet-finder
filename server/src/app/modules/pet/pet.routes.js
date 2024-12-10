import { Router } from "express";
import { petController } from "./pet.controller.js";

const router = Router();

router.post("/create-pet", petController.createPet);
router.patch("/update-pet", petController.updatePet);

export const petRoute = router;
