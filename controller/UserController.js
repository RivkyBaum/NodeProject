const User = require('../User')
const { validateEmail, validateName, validatePhone } = require('../jest/validation')
const axios = require('axios');

var listUsres = [
    { id: 1, name: "lea", email: "fff@ddd", phone: "999999" },
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
    Add: async (req, res) => {
        try {
            let id = req.body.id;
            let name = req.body.name;
            let email = req.body.email;
            let phone = req.body.phone;
            //uuid
            const UrlUuid = "https://www.uuidgenerator.net/api/guid.json"
            const responseFromUuid = await axios.get(UrlUuid);
            id = responseFromUuid.data;

            if (validateEmail(email) && validateName(name) && validatePhone(phone)) {
                listUsres.push(new User(id, name, email, phone));
                res.send(new_user);
            }
        }
        catch (error) {
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