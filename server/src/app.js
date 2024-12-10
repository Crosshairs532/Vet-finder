import express from "express";
import cors from "cors";
import allRoutes from "../src/app/routes/routes.js";
import router from "../src/app/routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Vet Finder Server in running !");
});

app.use("/api", router);

export default app;
