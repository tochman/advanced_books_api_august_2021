module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    name: 'Thomas Ochman',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}