const User=require('../User')
var listUsres=[
    {id:1,name:"aaa",email:"fff@ddd"},
    {id:2,name:"hhh",email:"fff@ddd"},
    {id:3,name:"aaa",email:"fff@ddd"},

]
module.exports={
    getById:(req,res)=>{
        let _id=req.params.id
        res.status(200).send(listUsres.find(a=>a.id==_id))
    },
    Add:(req,res)=>{
        let newUser=req.body
        listUsres.push(newUser)
        res.status(200).send(newUser)
    }
}