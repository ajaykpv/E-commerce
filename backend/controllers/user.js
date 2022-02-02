const User = require('../model/user')


exports.userById = (req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err){
            return res.status(400).json({
                err:'user not found'
            })
        }
        req.profile = user;
        
        next()
    })
}