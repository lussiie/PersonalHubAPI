const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/notes', require('./notes.routes'))
router.use('/books', require('./books.routes'))
router.use('/habits', require('./habits.routes'))
module.exports = router