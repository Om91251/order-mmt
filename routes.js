//this will contain all routes endpoint for api's
var http = require('http');

http.get('/auth/signup',(req,res)=>{
    res.send('auth successfull')

})
http.get('login',(req,res)=>{
    res.send('auth login successfull')

