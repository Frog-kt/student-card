const express = require("express");
const {
  signup,
  login,
  resetPassword,
  logout,
} = require("../controllers/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/password", resetPassword);
router.post("/logout", logout);

module.exports = router;
