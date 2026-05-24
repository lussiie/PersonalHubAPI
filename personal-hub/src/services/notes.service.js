const noteModel = require('../models/note.model')
const generateId = require('../utils/id')
const AppError = require('../utils/AppError')

async function createNote(data, userId) {
  const notes = await noteModel.findAll()
  const newNote = {
    id: generateId('n'),
    ownerId: userId,
    title: data.title,
    body: data.body,
    tags: data.tags || [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  notes.push(newNote)

  await noteModel.save(notes)

  return newNote
}

async function getMyNotes(userId) {
  const notes = await noteModel.findAll()
  return notes.filter(n => n.ownerId === userId)
}

async function updateNote(id, userId, data) {
  const notes = await noteModel.findAll()

  const index = notes.findIndex(n => n.id === id)

  if (index === -1) {
    throw new AppError('Note not found', 404)
  }

  if (notes[index].ownerId !== userId) {
    throw new AppError('Forbidden', 403)
  }

  notes[index] = {
    ...notes[index],
    ...data,
    updatedAt: new Date().toISOString()
  }

  await noteModel.save(notes)

  return notes[index]
}

module.exports = {
  createNote,
  getMyNotes,
  updateNote
}