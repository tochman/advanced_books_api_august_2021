"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Authors", [
      { name: "A. Lindgren", createdAt: new Date(), updatedAt: new Date() },
      { name: "J.K. Rowling", createdAt: new Date(), updatedAt: new Date() },
      { name: "T. Ochman", createdAt: new Date(), updatedAt: new Date() },
    ]);

    const astrid = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'A. Lindgren' LIMIT 1`
    );
    const rowling = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'J.K. Rowling' LIMIT 1`
    );

    const thomas = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'T. Ochman' LIMIT 1`
    );

    console.log(astrid[0][0].id)

    await queryInterface.bulkInsert("Books", [
      {
        title: "Pippi Longstocking",
        AuthorId: astrid[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Harry Potter",
        AuthorId: rowling[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Having Fun With NodeJS",
        AuthorId: thomas[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
