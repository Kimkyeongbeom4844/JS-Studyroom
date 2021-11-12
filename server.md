## 서버프로그래밍(express)

시작 :

npm init

npm install express

node index.js(또는 index)

형식 :

const express = require("express");

const app = express();

app.listen("8080",function(){
    
    console.log("server is running");

});

app.get("/",function(req,res){

    res.send("main page");

});

//req ->요청 , res ->응답 , ctrl c ->종료