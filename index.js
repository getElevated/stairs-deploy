import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import QuizRoutes from "./routes/QuizRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const corsOptions = {
  origin: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Stair's! We build a lead to a promising future.</h1>"
  );
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Error while connecting to database");
  }
};

app.use("/api/v1/auth", authRoute);
app.use("/api/quiz", QuizRoutes);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("updatedfrontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "updatedfrontend", "build", "index.html")
    );
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT ${PORT}`);
});
