const authService = require('../services/auth.service')
const asyncHandler = require('../utils/asyncHandler')
const { COOKIE_NAME } = require('../config/env')

const register = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const user = await authService.register(
    username,
    password
  )

  res.status(201).json(user)
})

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const result = await authService.login(
    username,
    password
  )

  res.cookie(COOKIE_NAME, result.token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  })
  res.json(result)
})
module.exports = {
  register,
  login
}