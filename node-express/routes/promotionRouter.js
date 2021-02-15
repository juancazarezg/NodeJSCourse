const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json())

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.end('Will send details of the promotions');
})
.post((req,res,next) => {
    res.end('Will add the promotion ' + req.body.name + 'with details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT request not supported on promotions');
})
.delete((req, res, next) =>{
    res.end('Deleting all the promotions');
});

promotionRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.end('Will send details of the promotion: ' + req.params.promoId);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST request not supported on promotion: '+ req.params.promoId);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT request not supported on promotion: ' + req.params.promoId);
})
.delete((req, res, next) =>{
    res.end('Deleting the promotion: ' + req.params.promoId);
});

module.exports = promotionRouter;