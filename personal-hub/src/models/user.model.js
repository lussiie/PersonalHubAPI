const { readJson, writeJson } = require('../utils/fileDb')
const FILE_NAME = 'users.json'
async function findAll() {
  return readJson(FILE_NAME)
}

async function findByUsername(username) {
  const users = await readJson(FILE_NAME)

  return users.find((user) => user.username === username)
}

async function findById(id) {
  const users = await readJson(FILE_NAME)

  return users.find((user) => user.id === id)
}

async function create(userData) {
  const users = await readJson(FILE_NAME)

  users.push(userData)
  await writeJson(FILE_NAME, users)
  return userData
}

module.exports = {
  findAll,
  findByUsername,
  findById,
  create
}