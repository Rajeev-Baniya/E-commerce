const express = require("express");
const { body, check, validationResult } = require("express-validator");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator/indexv");
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
