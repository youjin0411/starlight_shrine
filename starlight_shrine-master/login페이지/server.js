var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/login', function(req, res){
    if(req.cookies.login){
        var login = rep.cookies.login;
    }else{
        var login = 0;
    }
    login = login + 1;
    res.cookie(login);
    res.send('login : ' + login);
});

app.listen(8888, function(){
    console.log("서버가 실행 중 입니다.");
});