var express=require('express');
var router=express.Router();
var user=require('../Models/user_model');

router.post('/',function(req,res,next){
    user.login(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;