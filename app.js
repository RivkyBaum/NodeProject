const express=require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const app = express()
const UserRouter = require('./routes/UserRoute')
const port=3000

app.use(morgan('dev'))
app.use((req, res, next) => {
    //origin, headers, methods
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        res.status(200).send()
    }
    next()
})
app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'hello!!!!! :):)' })
})
app.listen(3000, () => {
    console.log(':) Rivky');
})