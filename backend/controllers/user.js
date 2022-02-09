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
exports.read = ( req,res )=>{
    req.profile.hashedPassword = undefined
    req.profile.salt =undefined
    return res.status(200).json(req.profile);
}
exports.update = (req,res)=>{
    User.findOneAndUpdate({_id:req.profile._id},{$set:req.body},{new:true},(err,user)=>{
        if(err){
            return res.status(400).json({
                err:"You are not authorized to perform this action"
            })
        }
        return res.status(200).json(user)

    });
}