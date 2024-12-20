import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

const configFiles = {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
};

export default configFiles;
