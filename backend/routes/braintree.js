const express = require('express');
const router = express.Router();
const {isAuth,isAdmin,isSignedin} = require('../controllers/auth');
const { generateToken, processPayment } = require('../controllers/braintree');
const {userById} = require('../controllers/user')

router.param('userId',userById)

router.get('/braintree/getToken/:userId',isSignedin,isAuth,generateToken)
router.post('/braintree/payment/:userId',isSignedin,isAuth,processPayment)

module.exports =router