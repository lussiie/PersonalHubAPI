const router = require('express').Router()

const controller = require('../controllers/notes.controller')
const auth = require('../middlewares/auth.middleware')
router.use(auth)
router.post('/', controller.create)
router.get('/', controller.getAll)
router.patch('/:id', controller.update)
module.exports = router