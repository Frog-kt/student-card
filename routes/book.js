const express = require("express");
const {
  getBooks,
  addBook,
} = require("../controllers/book");

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);

module.exports = router;
