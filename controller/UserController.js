const User = require('../User')
var listUsres = [
    { id: 1, name: "aaa", email: "fff@ddd", phone: "999999" },
    { id: 2, name: "hhh", email: "fff@ddd", phone: "999999" },
    { id: 3, name: "ggg", email: "fff@ddd", phone: "999999" },

]
const axios = require('axios');
module.exports = {
    getById: (req, res) => {
        let _id = req.params.id
        res.status(200).send(listUsres.find(a => a.id == _id))
        res.send(listUsres[req.params._id])
    },
    getAll: (req, res) => {
        res.send(listUsres)
    },
    Add: (req, res) => {
        let newUser = req.body
        let phoneUser = req.body.phone
        
        axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=66a5643d396849e489687cbe7aafb0e6&phone=${phoneUser}`)
            .then(response => {
                console.log(response.data);
                listUsres.push(newUser)
                // res.status(200).send(newUser)
                res.send(listUsres)

            })
            .catch(error => {
                console.log(error);
                res.status(404).send(error)
            });
    

    }
    // Delete:(req,res)=>{
    //     let user=
    // }
}