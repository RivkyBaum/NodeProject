//helow 😀😁😂🤣
const express=require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//יצירת שרת
const app = express()

const port=3005

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', (req, res, next) => {
    console.log("succeed");
    next()
})
//יצירת ראוטר
const UserR = require('./routes/UserRoute')
//יצירת הניתוב-בניתוב זה יביא את הפונקציות שיש בקובץ הניתובים
app.use('/UserRoute',UserR)
//הרשאות
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
//ניתוב ברירת מחדל שיכתוב הערה
app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'hello!!!!! :)' })
})
//שיביא בקונסול את כתובת השרת
app.listen(port, () => {
    console.log('wow');
    console.log(`my app is listening on http://localhost:${port}`);

})