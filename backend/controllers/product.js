const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');
const Product = require('../model/product');
const  {errorHandler} = require('../helpers/dbErrorHandlers')

exports.create = (req,res)=>{
   let form = new formidable.IncomingForm()
   form.keepExtensions = true;
   form.parse(req,(err,fields,files)=>{
       if(err){
           return res.status(400).json({
               error:"Image could not be uploaded"
           })
       }
       const {name, description, price, quantity, shipping, category} = fields;

       if(!name || !description || !price || !quantity || !shipping || !category){
            return res.status(400).json({
                error:"All fields are required."
            })
       }
       
       let products = new Product(fields);
       if(files.photo){
           if(files.photo.size > 1000000){
               return res.status(400).json({
               error:"Image should be less than 1 mb"
           }) 
           }
           products.photo.data = fs.readFileSync(files.photo.filepath);
           products.photo.contentType = files.photo.type;
       }
       products.save((err,product)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(product)
    })
   })
    
}