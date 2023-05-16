const express = require('express')

const router = express.Router()

const {
    getById,
    Add
} = require('../controller/user')
router.post('/', getById)
router.get('/', Add)

module.exports = router