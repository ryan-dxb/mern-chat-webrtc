const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postSignIn = asyncHandler(async (req, res) => {
  try {
    const { password, email } = req.body;

    // Check if email or password is empty
    if (!password || !email) {
      res.status(400);
      throw new Error("Please fill all fields");
    }

    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      res.status(400);
      throw new Error("Email or password is incorrect");
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(400);
      throw new Error("Email or password is incorrect");
    }

    // Create token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send response with user data and token
    res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = postSignIn;
