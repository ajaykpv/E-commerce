const express = require('express');
const router = express.Router();
const {isAuth,isAdmin,isSignedin} = require('../controllers/auth');
const { create, listOrders, getStatusValues,orderById,updateOrderStatus } = require('../controllers/order');
const {userById,addOrderToUserHistory} = require('../controllers/user')
const {decreaseQuantity} = require('../controllers/product')

router.param('userId',userById)
router.param("orderId", orderById);

router.post('/order/create/:userId',isSignedin,isAuth,addOrderToUserHistory,decreaseQuantity,create)
router.get('/order/list/:userId',isSignedin,isAuth,isAdmin,listOrders)
router.get('/order/status-values/:userId',isSignedin,isAuth,isAdmin,getStatusValues)
router.put(
    "/order/:orderId/status/:userId",
    isSignedin,
    isAuth,
    isAdmin,
    updateOrderStatus
);

module.exports =router