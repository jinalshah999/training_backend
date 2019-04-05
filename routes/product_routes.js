var express=require('express');
var router=express.Router();
var product=require('../Models/product_model');

router.get('/',function(req,res,next){
    
    product.getAllProducts(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:id',function(req,res,next){
    console.log(req.params.id);
    product.getProductById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/:action',function(req,res,next){
    if(req.params.action==='addProduct'){
        console.log(req.params.action);
        product.addProduct(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    
});
router.delete('/:id',function(req,res,next){
    product.deleteProduct(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:action/:id',function(req,res,next){
    if(req.params.action==='updateProduct'){
        console.log(req.params.id);
        product.updateProduct(req.params.id,req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
   
});
module.exports=router;