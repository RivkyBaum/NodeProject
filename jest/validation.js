const axios = require('axios');

module.exports={
    validateName: (name) =>{
        const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        return regex.test(name);
      },
      validateEmail:(email) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      },
      validatePhone : async (phone) => {
        const response = await axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=8cf0533e9612479b89fa5b6065107408&phone=${phone}`);
        return response.data.valid;
      }
}