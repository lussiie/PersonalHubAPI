const { readJson, writeJson } = require('../utils/fileDb')

const FILE = 'habits.json'
async function findAll() {
  return readJson(FILE)
}
async function save(data) {
  return writeJson(FILE, data)
}

module.exports = { findAll, save }