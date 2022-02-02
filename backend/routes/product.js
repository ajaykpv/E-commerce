const router = require('express').Router();
const {isAdmin,isSignedin,isAuth} = require('../controllers/auth')
const {create} = require('../controllers/product');
const { userById } = require('../controllers/user');

router.param('userId',userById);

router.post('/product/create/:userId',isSignedin,isAuth,isAdmin,create);


module.exports =  router; 