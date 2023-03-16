const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const verifyToken = require("../middleware/authMiddleware");
const validator = require("express-joi-validation").createValidator({});

// Schema for validation
const signupSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),

  password: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
});

const signinSchema = Joi.object({
  password: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
});

// Routes
router.post(
  "/signup",
  // validator.body(signupSchema),
  authControllers.controllers.postSignUp
);
router.post(
  "/signin",
  validator.body(signinSchema),
  authControllers.controllers.postSignIn
);

router.get("/test", verifyToken, (req, res) => {
  res.json({ user: req.user, message: "This is a protected route" });
});

module.exports = router;
