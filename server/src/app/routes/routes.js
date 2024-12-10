import { Router } from "express";
import { petRoute } from "../modules/pet/pet.routes.js";
import { ServiceRoutes } from "../modules/Service/service.routes.js";
import { ServiceRatingRoutes } from "../modules/serviceRating/serviceRating.routes.js";
import { verServiceRoutes } from "../modules/vet_service/vetService.routes.js";
const router = Router();

const allRoutes = [
  {
    path: "/pet",
    route: petRoute,
  },
  {
    path: "/service",
    route: ServiceRoutes,
  },
  {
    path: "/serviceRating",
    route: ServiceRatingRoutes,
  },
  {
    path: "/verService",
    route: verServiceRoutes,
  },
];

allRoutes.forEach((routes) => {
  router.use(routes.path, routes.route);
});

export default router;
