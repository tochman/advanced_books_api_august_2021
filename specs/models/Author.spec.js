const { Author } = Models;
const { Association, DataTypes } = require("sequelize");

describe("Author", () => {
  AuthorModel = new Author();
  const { tableName, tableAttributes, associations } = AuthorModel.constructor;

  beforeEach(async () => {
    subject = await factory.create("Author");
  });

  describe("Model", () => {
    it('is expected to have table name "Authors"', () => {
      expect(tableName).to.equal("Authors");
    });

    describe("is expected to have property:", () => {
      it("is expected to have property name:string", () => {
        expect(tableAttributes)
          .to.have.own.property("name")
          .that.has.property("type")
          .to.be.instanceOf(DataTypes.STRING);
      });
    });

    describe('is expected to have associations', () => {
      it('is expected to have many books', () => {
        expect(associations)
          .to.have.own.property('Books')
          .to.be.instanceOf(Association.HasMany)
          .that.has.property('foreignKey', 'AuthorId')
      });
    });
  });

  describe("Instance", () => {
    it("is expected to have a valid factory",  () => {
      expect(subject).to.include({
        name: "Thomas Ochman",
      });
    });

    describe("is expected to have properties", () => {
      it("name:string", () => {
        expect(subject).to.have.property("name").to.be.a("string");
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
