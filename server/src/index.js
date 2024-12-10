import mongoose from "mongoose";
import configFiles from "./app/config/index.js";
import app from "./app.js";

const main = async () => {
  const port = configFiles.port;
  console.log(configFiles.database_url);
  try {
    await mongoose.connect(configFiles.database_url);
    const server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

main();

// for asynchronous  behavior
process.on("unhandledRejection", () => {
  console.log(`UnhandledRejection is detected, shutting down server....`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
//  for synchronous behavior
process.on("uncaughtRejection", () => {
  console.log(`UnCaughtRejection is detected, shutting down server....`);
  process.exit(1);
});
