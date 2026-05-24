const habitModel = require('../models/habit.model')

async function getHabits() {
  return habitModel.findAll()
}

async function createHabit(data, userId) {
  const habits = await habitModel.findAll()

  const newHabit = {
    id: Date.now().toString(),
    ownerId: userId,
    name: data.name,
    frequency: data.frequency,
    createdAt: new Date().toISOString()
  }

  habits.push(newHabit)
  await habitModel.save(habits)

  return newHabit
}

module.exports = {
  getHabits,
  createHabit
}