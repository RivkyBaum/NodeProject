const axios=require("axios");

const apiUrl='http://www.hebcal.com/converter';
const qp={
    cfg:'json',
    date:'2011-06-02',
    g2h:1,
    strict:1
};
axios.get(apiUrl,{
    params:qp
    
})
.then(response=>{
    console.log(response.data);
})
.catch(err=>{
    console.log(err);
})


