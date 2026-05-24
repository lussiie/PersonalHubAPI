const service = require('../services/habits.service')
const asyncHandler = require('../utils/asyncHandler')
exports.create = asyncHandler(async (req, res) => {
  const habit = await service.createHabit(req.body, req.user.id)
  res.status(201).json(habit)
})

exports.checkIn = asyncHandler(async (req, res) => {
  const habit = await service.checkIn(req.params.id, req.user.id)
  res.json(habit)
})