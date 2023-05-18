const User = require('../User')
var listUsres = [
    { id: 1, name: "lea", email: "fff@ddd", phone: "999999" },
    { id: 2, name: "Yehudit", email: "fff@ddd", phone: "999999" },
    { id: 3, name: "pppppppppppppppp", email: "fff@ddd", phone: "055332545" },

]
const axios = require('axios');
function isEmailValid(email)
{
    // Check if email is a string
    if (typeof email !== 'string') {
        return false;
    }
    // Check if email has a valid format
    if (!/^[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(email)) {
        return false;
    }
    return true;
}
module.exports = {
    getById: (req, res) => {
        let _id = req.params.id
        res.status(200).send(listUsres.find(a => a.id == _id))
        res.send(listUsres[req.params._id])
    },
    getAll: (req, res) => {
        res.send(listUsres)
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