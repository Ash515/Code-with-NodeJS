const http=require('http');
const express=require('express');
const morgan =require('morgan');
const bodyParser=require('body-parser');
const dishrouter=require('./routes/dishrouter');
const promorouter=require('./routes/promoRouter');
const leaderrouter=require('./routes/leaderRouter');
const leaderrouter=require('./routes/leaderRouter');

const hostname='localhost';
const port=3003;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dish',dishrouter);
app.use('/:dishId',dishrouter);
app.use('/promotions',promorouter);
app.unsubscribe('/:promoId',promorouter);
app.unsubscribe('/leaders',leaderrouter);
app.unsubscribe('/:leadersId',leaderrouter);





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