const User = require('../User')
const axios = require('axios');

//data -מערך משתמשים 
var listUsres = [
    { id: 1, name: "bbb", email: "fff@ddd", phone: "999999" },
    { id: 2, name: "Yehudit", email: "fff@ddd", phone: "999999" },
    { id: 3, name: "Rivky", email: "fff@ddd", phone: "055332545" },
]

module.exports = {
    getById: async (req, res) => {
        let _id = req.params.id
        res.status(200).send(listUsres.find(a => a.id == _id))
        res.send(listUsres[req.params._id])
    },
    getAll: async (req, res) => {
        res.send(listUsres)
    },
    //חייבים לעשות את הפונקציה אסינכרונית כי זה עושה כמה קריאות שרת
    Add: async (req, res) => {
        try {
          const UrlUuid = "https://www.uuidgenerator.net/api/guid.json"
          let new_user = req.body;
          const response = await axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=8cf0533e9612479b89fa5b6065107408&phone=${req.body.phone}`);
          console.log(response.data.valid)
          if (response.data.valid == false) {
            res.send("not validate")
          } else {
            // אם המס' תקין מוסיפים uuid
            const responseFromUuid = await axios.get(UrlUuid);
            new_user.id = responseFromUuid.data;
            listUsres.push(new_user);
            res.send(new_user);
          }
        } catch (error) {
          console.log(error);
        }
      },

    //לא עובד!!
    Delete: async (req, res) => {
        try {
          const userId = req.params.id;
          const index = listUsres.findIndex(user => user.id === userId);
          if (index !== -1) {
            listUsres.splice(index, 1);
            res.status(200).send(`User with ID ${userId} deleted`);
          } else {
            res.status(404).send(`User with ID ${userId} not found`);
          }
        } catch (error) {
          console.log(error);
        }
    }
   
}