const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware order is important
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

// Database connection
connectToDB()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

// Routes
app.use("/users", userRoutes);
app.use("/captain", captainRoutes);

app.get("/test", (req, res) => {
  res.send("API Running");
});

module.exports = app;
