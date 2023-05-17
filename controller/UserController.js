const User = require('../User')
var listUsres = [
    { id: 1, name: "bbb", email: "fff@ddd", phone: "999999" },
    { id: 2, name: "Yehudit", email: "fff@ddd", phone: "999999" },
    { id: 3, name: "Rivky", email: "fff@ddd", phone: "055332545" },

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
        let _id=req.body.id
        let _name=req.body.name
        let _email=req.body.email
        let _phone=req.body.phone

        if(_id>4 && _id<7)
        res.send(_id)
        let newUser = {_id,_name,_email,_phone}
        let phoneUser = req.body.phone
        
        // axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=66a5643d396849e489687cbe7aafb0e6&phone=${phoneUser}`)
        //     .then(response => {
        //         console.log(response.data);
                listUsres.push(newUser)
                // res.status(200).send(newUser)
                res.send(listUsres)

            // })
            // .catch(error => {
            //     console.log(error);
            //     res.status(404).send(error)
            // });
    

    },
    Delete:(req,res)=>{
        const userId = req.params.id;
        const index = listUsres.find (user => user.id === userId);
        if (index !== -1) {
            listUsres.splice(index, 1);
            res.status(200).send(`User with ID ${userId} deleted`);
          } else {
            res.status(404).send(`User with ID ${userId} not found`);
          }
    }
   
}