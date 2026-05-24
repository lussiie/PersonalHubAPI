const service = require('../services/notes.service')
const asyncHandler = require('../utils/asyncHandler')

exports.create = asyncHandler(async (req, res) => {
  const note = await service.createNote(req.body, req.user.id)
  res.status(201).json(note)
})

exports.getAll = asyncHandler(async (req, res) => {
  const notes = await service.getMyNotes(req.user.id)
  res.json(notes)
})
exports.update = asyncHandler(async (req, res) => {
  const updated = await service.updateNote(
    req.params.id,
    req.user.id,
    req.body
  )
  res.json(updated)
})