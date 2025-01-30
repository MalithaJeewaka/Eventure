const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
