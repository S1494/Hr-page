import express, { urlencoded } from "express";
import homeRouter from "./router/homerouter.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    // origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  connectDB().then(() => {
    console.log("mongo connected");
  });

  console.log("Server connected");
});

app.use("/", homeRouter);
