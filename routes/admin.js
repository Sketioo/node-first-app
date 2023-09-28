const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir = require('../utils/path')

const products = [];

router.get('/add-products',(req, res, next) => {
  res.render('add-products', {pageTitle: 'Add Product',path: '/admin/add-products'})
})

router.post('/add-products', (req, res,) => {
  const {title} = req.body;
  products.push({title});
  res.redirect('/')
})

exports.routes = router;
exports.products = products;