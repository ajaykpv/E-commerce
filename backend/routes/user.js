const router = require('express').Router();
const {userById, read, update, purchaseHistory} = require('../controllers/user');
const {isSignedin,isAuth,isAdmin} = require('../controllers/auth');


router.param('userId',userById)

router.get('/s/:userId',isSignedin,isAuth,(req,res)=>{
    res.json({
       user: req.profile
    })
})

router.get('/user/:userId',isSignedin,isAuth,read)
router.put('/user/:userId',isSignedin,isAuth,update)
router.get('/orders/by/user/:userId',isSignedin,isAuth,purchaseHistory)
module.exports =  router; 