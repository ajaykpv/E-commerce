const router = require('express').Router();
const {signUp,signIn,signOut,isSignedin} = require('../controllers/auth')
const {userSignuoValidator} = require('../validator/index')

router.post("/signup",userSignuoValidator,signUp);
router.post("/signin",signIn);
router.get("/signout",signOut);


module.exports =  router; 