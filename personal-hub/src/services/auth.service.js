const userModel = require('../models/user.model')
const AppError = require('../utils/AppError')
const generateId = require('../utils/id')
const {
  hashPassword,
  verifyPassword
} = require('../utils/hash')

const { signToken } = require('../utils/token')

async function register(username, password) {
  const existingUser = await userModel.findByUsername(username)

  if (existingUser) {
    throw new AppError('Username already exists', 409)
  }
  const passwordHash = await hashPassword(password)
  const newUser = {
    id: generateId('u'),
    username,
    passwordHash,
    createdAt: new Date().toISOString()
  }
  await userModel.create(newUser)

  return {
    id: newUser.id,
    username: newUser.username
  }
}
async function login(username, password) {
  const user = await userModel.findByUsername(username)

  if (!user) {
    throw new AppError('Invalid credentials', 401)
  }

  const isPasswordCorrect = await verifyPassword(
    password,
    user.passwordHash
  )
  if (!isPasswordCorrect) {
    throw new AppError('Invalid credentials', 401)
  }
  const token = signToken({
    id: user.id,
    username: user.username
  })

  return {
    token,
    user: {
      id: user.id,
      username: user.username
    }
  }
}
module.exports = {
  register,
  login
}