const router = require('express').Router();
const {userById} = require('../controllers/user');
const {isSignedin,isAuth,isAdmin} = require('../controllers/auth');


router.param('userId',userById)

router.get('/s/:userId',isSignedin,isAuth,(req,res)=>{
    res.json({
       user: req.profile
    })
})
module.exports =  router; 