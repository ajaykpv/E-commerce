const router = require('express').Router();
const {isAdmin,isSignedin,isAuth} = require('../controllers/auth')
const {create,categoryById, read, remove, update, list} = require('../controllers/category');
const { userById } = require('../controllers/user');

router.param('userId',userById);
router.param('categoryId',categoryById);

router.post('/category/create/:userId',isSignedin,isAuth,isAdmin,create);
router.put('/category/:categoryId/:userId',isSignedin,isAuth,isAdmin,update);
router.get('/categories',list);
router.delete('/category/:categoryId/:userId',isSignedin,isAuth,isAdmin,remove);
router.get('/category/:categoryId',read)   

module.exports =  router; 