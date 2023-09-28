const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir = require('../utils/path')

router.get('/add-products',(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-products.html'));
})

router.post('/add-products', (req, res,) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;