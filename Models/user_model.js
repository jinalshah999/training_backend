var db=require('../dbconnection');
var users={
    getAllUsers:function(callback){
        return db.query("select * from user_tbl",callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from user_tbl where user_email=?",[id],callback);
    },
    getUserByUserName:function(id,callback){
        return db.query("select * from user_tbl where user_email=?",[id],callback);
    },
    addUser:function(item,filename,callback){
        return db.query("insert into user_tbl values(?,?,?,?,?,?)",[item.user_email,item.user_name,item.password,filename,item.user_mobileno,item.user_hobby],callback)
    },
    login:function(item,callback){
        return db.query("select * from user_tbl where user_email=? and password=?",[item.user_email,item.password],callback);
    }   
};
module.exports=users;