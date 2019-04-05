var db=require('../dbconnection');
var students={
    addStudent:function(item,callback){
        return db.query("insert into student_tbl values(?,?,?,?) ",[item.roll_no,item.name,item.fees,item.mobile_no],callback);
    },
    updateStudent:function(id,item,callback){
        return db.query("update student_tbl set name=?,fees=?,mobile_no=? where roll_no=?",[item.name,item.fees,item.mobile_no,id],callback);
    },
    deleteStudent:function(id,callback){
        return db.query("delete from student_tbl where roll_no=?",[id],callback);
    },
    getAllStudents:function(callback){
        return db.query("select * from student_tbl",callback);
    },
    getStudentByRollNumber:function(id,callback){
        return db.query("select * from student_tbl where roll_no=?",[id],callback);
    }
    
};
module.exports=students;