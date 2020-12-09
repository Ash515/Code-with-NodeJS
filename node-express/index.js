const http=require('http');
const express=require('express');
const morgan =require('morgan');

const hostname='localhost';
const port=3030;

const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    res.statusCode=202;
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1><font color="yellow">This is Express server</font></h1></body></html>');
});

const server=http.createServer(app)
server.listen(port,hostname,()=>{
    console.log(`server is running on http://${hostname}:${port}`)
});