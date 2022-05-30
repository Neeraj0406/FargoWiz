const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const User = require("./model/User");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.post("/createUser", async (req, res) => {
  const userData = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  try {
    const savedData = await userData.save();
    return res.status(201).json(savedData);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get("/getUser", async (req, res) => {
  try {
    const allUser = await User.find();
    return res.status(200).json(allUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
