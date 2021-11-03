const { expect, factory, pending } = require('../helpers')
const { Association, DataTypes } = require('sequelize')

describe('ModelName', () => {
  BookModel = factory.factories.Book.Model
  const { tableName, tableAttributes, associations } = BookModel

  beforeEach(async () => {
    subject = await factory.create('Book')
  });

  describe('Model', () => {
    it('is expected to have table name "Books"', () => {
      expect(tableName).to.equal('Books')
    });

    describe('is expected to have property:', () => {

      it('is expected to have property title:string', () => {
        expect(tableAttributes)
          .to.have.own.property('title')
          .that.has.property('type').to.be.instanceOf(DataTypes.STRING)
      });

    });

    // describe('is expected to have associations', () => {
    //   it('<AssociatedModel>:<AssociationType>', () => {
    //     // expect(associations)
    //     //   .to.have.own.property('<model_alias_or_name>')
    //     //   .to.be.instanceOf(Association.<AssociationType>)
    //     //   .that.has.property('foreignKey', '<field>')
    //     pending();
    //   });
    // });
  });

  describe('Instance', () => {

    it('is expected to have a valid factory', () => {
      expect(subject).to.include({
        title: 'My Awesome First Novel'
      })
    });

    describe('is expected to have properties', () => {
      it('title:string', () => {
        expect(subject)
          .to.have.property('title').to.be.a('string')
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