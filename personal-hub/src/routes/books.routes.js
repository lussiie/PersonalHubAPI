const router = require('express').Router()
const controller = require('../controllers/books.controller')
const auth = require('../middlewares/auth.middleware')
router.use(auth)

router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router