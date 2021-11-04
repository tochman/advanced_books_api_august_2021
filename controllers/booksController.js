const models = require("../models");
const booksController = {
  async index(request, response, next) {
    const bookIndex = await models.Book.findAll({
      include: [
        {
          model: models.Author,
          as: "author",
          attributes: ['name']
        },
      ],
      attributes: ["id", "title"],
    });
    response.send({ books: bookIndex });
  },
};

module.exports = booksController;
