const service = require('../services/books.service')
const asyncHandler = require('../utils/asyncHandler')

exports.getAll = asyncHandler(async (req, res) => {
  const books = await service.getMyBooks(req.user.id)
  res.json(books)
})
exports.create = asyncHandler(async (req, res) => {
  const book = await service.createBook(req.body, req.user.id)
  res.status(201).json(book)
})