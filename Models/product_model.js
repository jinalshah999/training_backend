var db=require('../dbconnection');
var products={
    getAllProducts:function(callback){
        return db.query("select * from products",callback);
    },
    getProducts:function(callback){
        return db.query("select pro_name from products",callback);
    },
    deleteProduct:function(id,callback){
        return db.query("delete from products where pro_id=?",[id],callback);
    },
    getProductById:function(id,callback){
        return db.query("select * from products where pro_id=?",[id],callback);
    },
    addProduct:function(item,callback){
        return db.query("insert into products values(?,?,?,?)",[item.pro_id,item.pro_name,item.pro_price,item.pro_img],callback)
    },
    updateProduct:function(id,item,callback){
        return db.query("update products set pro_name=?,pro_price=?,pro_img=? where pro_id=?",[item.pro_name,item.pro_price,item.pro_img,id],callback)
    }
    
};
module.exports=products;