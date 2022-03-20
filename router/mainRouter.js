const express = require('express')
const router = express.Router()
const {register, login, upload, getAll, search} = require ('../controllers/mainController')
const validator = require('../middle/validator')

router.post ('/register', validator.registerValidate, register)
router.post ('/login', login)
router.post ('/upload', upload)
router.get ('/getAll', getAll)
router.post ('/search', search)




module.exports = router