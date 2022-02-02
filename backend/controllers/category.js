const Category = require('../model/category');
const  {errorHandler} = require('../helpers/dbErrorHandlers')

exports.create = (req,res)=>{
    const category = new Category(req.body)
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(category)
    })
}