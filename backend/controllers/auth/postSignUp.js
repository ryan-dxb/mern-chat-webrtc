const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postSignUp = asyncHandler(async (req, res) => {
  try {
    const { username, password, email } = req.body;

    console.log(req.body);

    // Check if username or email is empty
    if (!username || !password || !email) {
      res.status(400);
      throw new Error("Please fill all fields");
    }

    // Check if user already exists
    const userExist = await User.exists({ email: email.toLowerCase() });

    console.log(userExist);

    if (userExist) {
      res.status(400);
      throw new Error("Email already exists. Please sign in.");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      username,
      password: hashedPassword,
      email: email.toLowerCase(),
    });

    // Create token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send response with user data and token
    res.status(201).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

module.exports = postSignUp;
