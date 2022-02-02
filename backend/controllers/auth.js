const User = require('../model/user');
const  {errorHandler} = require('../helpers/dbErrorHandlers')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signUp = (req,res) =>{
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        user.salt= undefined;
        user.hashedPassword =undefined;
        res.json({
            user
        })
    })
}

exports.signIn = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({email},(error,user)=>{
        if(error || !user){
            return res.status(400).json({
                err:"User with the email is doesnt exist please signup."
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                err: "Email and password doesnt match."
            })
        }
        const  token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
        res.cookie('token',token,{expire:new Date()+9999});
        const {_id,name,email,role} = user;
        return res.json({token,user:{_id,name,email,role}});
    })
}

exports.signOut = (req,res)=>{
    res.clearCookie('token');
    res.json({
        message: "signout success"
    })
}

exports.isSignedin = expressJwt({
    secret:process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty:'auth'
})

exports.isAuth = (req,res,next)=>{
     let user = req.profile && req.auth && req.profile._id == req.auth._id;
     if(!user){
         return res.status(400).json({
             error: 'Access denied'
         })
     }
     next();

}

exports.isAdmin = (req,res,next)=>{
     if(req.profile.role === 0){
         return res.status(403).json({
             error: "Only for admins...Access denied"
         })
     }
     next();
}