const router = require('express').Router()
const controller = require('../controllers/habits.controller')
const auth = require('../middlewares/auth.middleware')
router.use(auth)

router.post('/', controller.create)
router.post('/:id/check-in', controller.checkIn)

module.exports = router