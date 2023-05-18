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
    Add: (req, res) => {
      
        let _name=req.body.name
        let _email=req.body.email
        let _phone=req.body.phone
        if(isEmailValid(req.body.email))
        console.log("valid")
      
        let newUser = {_name,_email,_phone}
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
    Add1:(req,res)=>{
        const { name,email,phone } = req.body
        //כל אובייקט json
        //שהמפתח והערך הם בעלי אותו שם
        //מספיק לכתוב פעם אחת בלבד
        User.find({ email })
            .then((listUsres) => {
                console.log(users);
                if (listUsres.length >= 1) {
                    return res.status(409).send({ message: 'Email is already exists' })
                }

               
                    const user = new User({
                        id:hash,
                        name,
                        email,
                        phone 
                    })
                    user.save()
                        .then(() => {
                            res.status(200).send('user created!')
                        })
                        .catch((error) => {
                            res.status(500).send({ error: error.message })
                        })
                })
            
            .catch((error) => {
                res.status(500).send({ error: error.message })
            })
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