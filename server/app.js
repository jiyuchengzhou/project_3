//app.js 服务器端程序
//1:下载第三方模块
//  express express-session
//  mysql cors
//  示例
//  npm i express express-session mysql cors 回车
//2:引入第三方模块
//web服务器
const express = require("express");
//session对象
const session = require("express-session");
//mysql驱动
const mysql =require("mysql");
//跨域
const cors=require("cors");
//3:创建数据库连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"wc",
    port:3306,
    connectionLimit:15
});
//4:配置跨域模块:允许脚手架访问服务器
var server = express();
server.use(cors({
  //允许:脚手架访问服务器
  origin:["http://127.0.0.1:8080","http://localhost:8080","http://192.168.0.108:8080"],
  //每次请求加验证
  credentials:true
}))
//5:配置session !!!
//6:创建服务器对象
//6.1:配置静态目录
// server.use(express.static("public"));
//6.2:配置session对象
server.use(session({
  secret:"128位安全字符串",//加密条件
  resave:true,//请求更新数据
  saveUninitialized:true //保存初始数据
}))
//7:为服务器对象绑定端口 4000
server.listen(4000);



//登录
server.get("/login",(req,res)=>{
  //(1)获取用户名和密码
   var u = req.query.uname;
   var p = req.query.upwd;
  //(2)创建sql
   var sql = `SELECT uid FROM wc_user where uname='${u}' AND upwd='${p}'`;
  //(3)返回结果
   pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        var userid = result[0].uid;
        //-保存session对象中
        req.session.userid = userid;
        
        console.log(req.session);
        res.send("1");
      }else{
        res.send("0");
      }
  })
})

//注册
server.get("/register",(req,res)=>{
  //(1)获取用户名和密码
   var uname= req.query.uname;
   var upwd= req.query.upwd;
   var phone=req.query.phone;
  //(2)创建sql
   var sql=`insert into wc_user (uname,upwd,phone)  values ('${uname}','${upwd}','${phone}')`;
  //(3)返回结果
   pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.affectedRows>0){
        res.send("1");
      }else{
        res.send("0");
      }
  })
})

//获得首页商品列表数据
server.get("/index",(req,res)=>{
   var sql=`select * from wc_product`;
   pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        res.send(result);
      }else{
        res.send("0");
      }
  })
})

//获得商品详情页所需数据
server.get("/details",(req,res)=>{
   var id = req.query.id;
  //创建sql
   var sql = `SELECT * FROM wc_product where id='${id}'`;
  //返回结果
   pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        res.send(result);
      }else{
        res.send("0");
      }
  })
})


//获得购物车商品数据
server.get("/cart",(req,res)=>{
  var sql = `SELECT * FROM wc_cart`;
  pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       res.send(result);
     }else{
       res.send("0");
     }
 })
})

//添加购物车数据
server.get("/addcart",(req,res)=>{
  //1:获取当前登录用户凭证
  var userid = req.session.userid;
  //2:如果当前用户没有登录 请登录
  if(!userid){
   res.send("-1");
   return;
  }
   var src= req.query.src;
   var price= req.query.price;
   var yuanid=req.query.id;
   var intr=req.query.intr;
   var guige=req.query.guige;
   var sql=`insert into wc_cart (src,price,yuanid,intr,guige)  values ('${src}','${price}','${yuanid}','${intr}','${guige}')`;
   pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.affectedRows>0){
        res.send("1");
      }else{
        res.send("0");
      }
  })
})

// `select * from klw_index1_product where intr like '%${key}%' `
// 模糊查询
server.get("/search",(req,res)=>{
  var key=req.query.key;
  var sql = `select * from wc_product where intr like '%${key}%' `;
  pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       res.send(result);
     }else{
       res.send("0");
     }
 })
})

// let sql=`delete from klw_cart where pid=${pid} `
//删除购物车内容
server.get("/del",(req,res)=>{
   var id= req.query.id;
   let sql=`delete from wc_cart where id=${id} `
   pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.affectedRows>0){
        res.send("1");
      }else{
        res.send("0");
      }
  })
})

server.get("/jianche",(req,res)=>{
  console.log(req.session)
  //1:获取当前登录用户凭证
  var userid = req.session.userid;
  //2:如果当前用户没有登录 请登录
  if(!userid){
   res.send("-1");
  //  console.log(uid)
  }
})

//退出登录
server.get("/exit",(req,res)=>{
  // req.session.destroy(function(err){
  //   if(!req.session.userid){
  //     res.send("1")
  //   }  
  delete req.session.userid; 
  console.log(req.session)
  res.send("1")
  // })
})




