const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc     Get books
// @route    GET /v1/book
// @access   Private
exports.getBooks = asyncHandler(async (req, res, next) => {
  const books = [];

  res.status(200).json(books);
});

// @desc     Add book
// @route    POST /v1/book
// @access   Private
exports.addBook = asyncHandler(async (req, res, next) => {
  const { title, tags } = req.body;

  const book = {
    title,
    tags,
  };

  res.status(200).json(book);
});
