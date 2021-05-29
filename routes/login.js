var express = require('express');
var sq = require('./db.js');
var fs = require('fs');
var path = require('path');
var router = express.Router();




router.get('/', function(req, res, next) {
    let sql = "select * from users where username='" + req.body.Name + "' and password='" + req.body.Password + "'";
    let userinfo = {};
    sq.base(sql, [], (results) => {
        if (results.length >= 1) {
            res.render('main')
        } else {
            res.render('error')
        }
    })
})

module.exports = router;
module