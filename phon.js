const axios=require("axios");
const { response } = require("express");
const apiUrl='http://phonevalidation.abstractapi.com/v1/';
const apiKey='3f8b2dfb3be0499d9de96ab0920ba648';
const phoneNumber='14152007986';
axios.get(apiUrl,{
    params:{
        api_key:apiKey,
        phone:phoneNumber
    }
})
.then(response=>{
    console.log(response.data);
})
.catch(err=>{
    console.log(err);
})