const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })


  .get((req, res, next) => {
    res.end('Will send details of the dishes to you!');
  })

  .post((req, res, next) => {
    res.write('Updating the dishes: ' +  '\n');
    res.end('Will update the dishes: ' + req.body.name +
      ' with details: ' + req.body.description);
  })

  .put((req, res, next) => {
   res.end("PUT is not applicable !")
  })

  .delete((req, res, next) => {
    res.end('Deleting the dish');
  });

  dishRouter.route('/:dishId')
  
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })


  .get((req, res, next) => {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
  })

  .post((req, res, next) => {
    res.end('POST is not possible!')
  })

  .put((req, res, next) => {
    res.end(req.params.dishId + ' Will update the and dish: ' + req.name.dishId + 'with details: ' + req.body.description);
  })

  .delete((req, res, next) => {
    res.end('Deleting the dishId: ' + req.params.dishId);
  });



module.exports = dishRouter;