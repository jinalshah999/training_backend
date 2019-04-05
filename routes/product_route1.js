var express=require('express');
var router=express.Router();
var product=require('../Models/product_model');


router.get('/',function(req,res,next){
    product.getProducts(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;