const express = require("express");
const router = express.Router();
const { resourceController, booksController } = require("../controllers");

/* Create routes for each controller in your application. */
router.get("/resource", resourceController.index);

router.get("/books", booksController.index);

module.exports = router;
