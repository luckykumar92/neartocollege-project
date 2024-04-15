import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const twoStepBack = path.join(__dirname, "../");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //set the limit of data to sending
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import printRouter from "./routes/print.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/prints", printRouter);

app.use(errorHandler);

// --------------HEROKU-----
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(twoStepBack, "frontend", "dist", "index.html"));
  });
}

export { app };
