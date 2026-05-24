const noteModel = require('../models/book.model') // կամ քո իրական model-ը

async function getBooks() {
  const books = await noteModel.findAll()
  return books
}

async function createBook(data) {
  const books = await noteModel.findAll()

  const newBook = {
    id: Date.now().toString(),
    title: data.title,
    author: data.author,
    createdAt: new Date().toISOString()
  }

  books.push(newBook)
  await noteModel.save(books)

  return newBook
}
module.exports = {
  getBooks,
  createBook
}