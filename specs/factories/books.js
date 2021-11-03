module.exports = (factory, Models) => {
  factory.define('Book', Models.Book, {
    title: 'My Awesome First Novel',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}