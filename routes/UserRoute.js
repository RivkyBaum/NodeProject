//hellow route
const express = require('express')

const router = express.Router()

const {
    getById,
    Add,
    getAll,
    Delete
} = require('../controller/UserController')
router.post('/Add', Add)
router.get('/getById/:id', getById)
router.get('/getAll', getAll)
router.delete('/delete/:id', Delete)



module.exports = router