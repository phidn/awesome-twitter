require("dotenv").config();

const connectDB = require("./configs/db");
connectDB();
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const {errorHandler} = require("./middlewares/errorHandler");

const app = express();

// allow request from frontend to backend
app.use(cors());

// Body parse
app.use(express.json());

// Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/post", postRoute);

// Unhandled route
app.all("*", (req,res,next) => {
  const err = new Error("The route can not be found");
  err.statusCode = 404;
  next(err);
});

app.use(errorHandler);

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello VAGABOND, server is running on ${host}:${port}`);
})
