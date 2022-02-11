const router = require('express').Router();
const {isAdmin,isSignedin,isAuth} = require('../controllers/auth')
const {create, productById,read, remove, update, list, listRelated, listCategories, listBySearch,listSearch, photo} = require('../controllers/product');
const { userById } = require('../controllers/user');

router.param('userId',userById);
router.param('productId',productById);

router.get('/product/:productId',read)
router.post('/product/create/:userId',isSignedin,isAuth,isAdmin,create);
router.delete('/product/:productId/:userId',isSignedin,isAuth,isAdmin,remove);
router.put('/product/:productId/:userId',isSignedin,isAuth,isAdmin,update);
router.get('/products',list);
router.get('/products/related/:productId',listRelated)
router.get('/products/categories',listCategories)
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId",photo)
router.get("/products/search",listSearch)

module.exports =  router; 