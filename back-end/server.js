require("dotenv").config();

const connectDB = require("./configs/db");
connectDB();

const express = require("express");
const cors = require("cors");

const app = express();

// allow request from frontend to backend
app.use(cors());

// body parse
app.use(express.json());

app.get("/", (req,res,next) => {
  res.status(200).json({
    status: "success",
    data: {
      posts: [{
        content: "Hello VAGABOND!!!",
        date: "8:59PM"
      }]
    }
  })
})

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello VAGABOND, server is running on ${host}:${port}`);
})
