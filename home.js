var express = require('express');
var app = express();
var router1 = express.Router();
var router2 = express.Router();
router1.get('/home/:ip1',(req,res)=>{
    var ip1 = parseInt( req.params.ip1);
    ip1 = ip1*2;
    res.json("ket qua = "+ip1);
})

router2.get('/user/:ip2',(req,res)=>{
    var arr = [1,2];
    var ip2 = req.params.ip2;
    arr.push(ip2);
    res.json("ket qua = "+arr); 
})
app.use('/index/',router1);
app.use('/index/',router2);
app.listen(8000,()=>{
    console.log("sever start on port");
})