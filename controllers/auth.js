const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc     Signup user
// @route    POST /v1/auth/signup
// @access   Public
exports.signup = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = {
    email,
    password,
  };

  res.status(200).json(user);
});

// @desc     Login user
// @route    POST /v1/auth/login
// @access   Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = {
    email,
    password,
  };

  res.status(200).json(user);
});

// @desc     Reset password
// @route    PUT /v1/auth/password
// @access   Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { email, old_password, new_password } = req.body;

  const user = {
    email,
    new_password,
  };

  res.status(200).json(user);
});

// @desc     Logout
// @route    POST /v1/auth/logout
// @access   Public
exports.logout = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
