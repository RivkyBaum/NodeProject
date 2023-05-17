const express = require('express')

const router = express.Router()

const {
    getById,
    Add,
    getAll
} = require('../controller/UserController')
router.post('/Add', Add)
router.get('/getById/:id', getById)
router.get('/getAll', getAll)


module.exports = router