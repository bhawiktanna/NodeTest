const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    console.log('Inside form');
});

router.post('/add-product',(req, res, next)=>{
    console.log('Inside Product');
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;