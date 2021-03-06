const Category = require('../model/category');
const  {errorHandler} = require('../helpers/dbErrorHandlers')

exports.categoryById= (req,res,next,id)=>{
   Category.findById(id).exec((err,category)=>{
        if(err || !category){
            return res.status(400).json({
                error: "category not found."
            })
        }
        req.category = category
        next()
    })
};

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

exports.update = (req,res)=>{
    const category =req.category;
    category.name = req.body.name;
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.status(200).json(category)
    })
}
exports.list = (req,res)=>{
    Category.find().exec((err,data)=>{
         if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.status(200).json(data)
    })
}
exports.remove = (req,res)=>{
    const category = req.category
    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.status(200).json({
            message:"Category is deleted."
        })
    })
}

exports.read = (req,res)=>{
    return res.status(200).json(req.category)
}