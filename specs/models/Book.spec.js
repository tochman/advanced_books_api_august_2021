const { pending } = require("../helpers");
const { Book } = Models;
const { Association, DataTypes } = require("sequelize");

describe("Book", () => {
  BookModel = new Book();
  const { tableName, tableAttributes, associations } = BookModel.constructor;

  beforeEach(async () => {
    subject = await factory.create("Book", { title: "Whatever" });
  });

  describe("Model", () => {
    it('is expected to have table name "Books"', () => {
      expect(tableName).to.equal("Books");
    });

    describe("is expected to have property:", () => {
      it("is expected to have property title:string", () => {
        expect(tableAttributes)
          .to.have.own.property("title")
          .that.has.property("type")
          .to.be.instanceOf(DataTypes.STRING);
      });
    });

    describe('associations', () => {
      it('is expected to belong to author', () => {
        expect(associations)
          .to.have.own.property('author')
          .to.be.instanceOf(Association.BelongsTo)
          .that.has.property('foreignKey', 'AuthorId')
      });
    });
  });

  describe("Instance", () => {
    it("is expected to have a valid factory", async () => {
      const factoryMade = await factory.create("Book");
      expect(factoryMade).to.include({
        title: "My Awesome First Novel",
      });
    });

    describe("is expected to have properties", () => {
      it("title:string", () => {
        expect(subject).to.have.property("title").to.be.a("string");
      });
    });

    // describe('is expected to have association accessors', () => {
    //   it('for the <AssociatedModel> association', () => {
    //     // expect(subject)
    //     //   .to.respondTo('get<AssociatedModel>')
    //     //   .and.respondTo('set<AssociatedModel>')
    //     //   .and.respondTo('create<AssociatedModel>')
    //     pending();

    //   });
    // });
  });
});
