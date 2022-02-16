const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
router.get('/v1/users', apiController.users);
router.get('/v1/users/:id', apiController.usersDetail);
router.get('/v1/products', apiController.products);
router.get('/v1/products/:id', apiController.productsDetail);
router.get('/v1/dashboard',apiController.dashboard)

module.exports = router;