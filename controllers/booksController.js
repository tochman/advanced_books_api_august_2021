const models = require("../models");
const booksController = {
  async index(request, response, next) {
    const bookIndex = await models.Book.findAll();
    response.send({ books: bookIndex });
  },
};

module.exports = booksController;
