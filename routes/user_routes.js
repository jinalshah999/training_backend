var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var user = require('../Models/user_model');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});

router.get('/', function (req, res, next) {

    user.getAllUsers(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

var upload = multer({storage: storage});
router.post('/',upload.single('image'), function (req, res, next) {

    user.addUser(req.body,req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});
router.delete('/:id', function (req, res, next) {
    user.deleteUser(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;