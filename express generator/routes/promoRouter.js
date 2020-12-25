const express=require('express');
const bodyParser=require('body-parser');
const promorouter=express.Router();

promorouter.use(bodyParser.json());
promorouter.route('/')
.all((req,res,next)=>{
    res.codeStatus=202;
    res.setHeader('content-type','text/plain');
   next();
})
.get((req,res,next)=>{
    res.end('promotion members lists');
})
.post((req,res,next)=>{
res.end('Your new list name is posted');
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("PUT operation is not applicable!");
})
.delete((req,res,next)=>{
    res.end("Your all data deleted...");
})

promorouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=202;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Your id'+req.params.promoId);
})
.post((req,res,next)=>{
    res.end("POST is not applicable");
})
.put((req,res,next)=>{
    res.write('Updating'+req.body.name+'and description'+req.body.description+'/n');
    res.end('Updated your data');

})
.delete((req,res,next)=>{
    res.end("Deleted the data ");
})
module.exports= promorouter;