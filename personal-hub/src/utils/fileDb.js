const fs = require('fs').promises
const path = require('path')

const DATA_DIR = path.join(__dirname, '../../data')
async function readJson(file) {
  const filePath = path.join(DATA_DIR, file)
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data || '[]')
}

async function writeJson(file, data) {
  const filePath = path.join(DATA_DIR, file)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

module.exports = {
  readJson,
  writeJson
}