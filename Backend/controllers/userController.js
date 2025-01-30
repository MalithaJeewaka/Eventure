const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

// Register a new user
// route /api/users
// access - public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //validation
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //   checking if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //   password hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //salt is used to prevent from rainbow attacks.
  //gensalt generate a salt which is a string and we hash the password and the salt

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// login a suser
// /api/users/login
// public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json(200).json({
      _id: user.id,
      firstName: user.firstName,
      email: user.email,
      token: generatedToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// get current user
// /api/users/me
// private

const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.json(user);
});

module.exports = { registerUser, loginUser, getMe };
