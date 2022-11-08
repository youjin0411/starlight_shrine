const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');

var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/login', function(req, res){
    loginid = idInput;
    loginps = pwInput;
    res.cookie(loginid, loginps);
    res.send('login : ' + loginid);
});

app.listen(8888, function(){
    console.log("서버가 실행 중 입니다.");
});