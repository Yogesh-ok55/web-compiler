const express = require("express");

const {signup,login} = require("../controller/authController");
const e = require("express");

const router = express.Router();

router.get("/signup",signup);
router.get("signin",login);

module.exports = router