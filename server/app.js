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
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  //每次请求加验证
  credentials:true
}))
//5:配置session !!!
//6:创建服务器对象
//6.1:配置静态目录
server.use(express.static("public"));
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











//功能一:用户登录验证
server.get("/login",(req,res)=>{
//(1)获取用户名和密码
 var u = req.query.uname;
 var p = req.query.upwd;
//(2)创建sql
 var sql = "SELECT id FROM xz_login WHERE uname=? AND upwd=md5(?)";
//(3)返回结果
 pool.query(sql,[u,p],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"});
    }else{
     //将当前登录用户id保存
     //session对象中作为登录成
     //功凭证
     //-获取当前用户id
     //result=[{id:1}]
     var uid = result[0].id;
     //-保存session对象中
     req.session.uid = uid;
     console.log(req.session);
     res.send({code:1,msg:"登录成功"});
    }
 })
})

//验证
//1:启动 mysql  
//2:启动 node app.js
//3:打开浏览器在地址栏输入
// http://127.0.0.1:4000/login?uname=1&upwd=1
// http://127.0.0.1:4000/login?uname=tom&upwd=123



//功能二:显示商品分页列表 84~112
server.get("/product",(req,res)=>{
//1:参数 页码
//一页几行 12
var pno = req.query.pno;
var ps = req.query.pageSize;
//1.1:为参数设置默认值
if(!pno){pno=1}
if(!ps){ps=12}
//2:sql
var sql = "SELECT lid,lname,price,img_url FROM xz_laptop LIMIT ?,?";
//2.1:启始记录数
var offset = (pno-1)*ps;
//2.2:一行几条记录
ps = parseInt(ps);
//3:返回值
pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,msg:"查询成功",data:result});
})
})
//验证
//1:启动 mysql  
//2:启动 node app.js
//3:将01.jpg 02.jpg 复制public目录
//4:db_01.sql 复制到mysql执行
//5:打开浏览器在地址栏输入
// http://127.0.0.1:4000/product
// http://127.0.0.1:4000/product?pno=2
// http://127.0.0.1:4000/01.jpg
// http://127.0.0.1:4000/02.jpg




//功能三:添商品添加至购物车
//119~161
server.get("/addcart",(req,res)=>{
  //1:获取当前登录用户凭证
  var uid = req.session.uid;
  //2:如果当前用户没有登录 请登录
  if(!uid){
   res.send({code:-2,msg:"请登录"});
   return;
  }
  //3:获取脚手架传递参数 lid;lname;//price
  var lid = req.query.lid;
  var lname = req.query.lname;
  var price =  req.query.price;
  //4:创建查询sql语句 
  //  当前用户是否购买过此商品
  var sql = "SELECT id FROM xz_cart WHERE uid = ? AND lid=?";
  //5:执行sql语句
  pool.query(sql,[uid,lid],(err,result)=>{
  if(err)throw err;
  //6:判断如果没有购买过此商品添加
  if(result.length==0){
    var sql = `INSERT INTO xz_cart VALUES(null,${lid},${price},1,'${lname}',${uid})`;
  }else{
    var sql = `UPDATE xz_cart SET count=count+1 WHERE uid=${uid}   AND lid=${lid}`;
  }
  //7:如果己购买过此商品更新数量
  //8:执行sql
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"})
  })  
  })
});


//1:启动 mysql  
//2:启动 node app.js
//4:db_02.sql 复制到mysql执行
//5:打开浏览器在地址栏输入
// http://127.0.0.1:4000/addcart?lid=1&price=99&lname=ss
// http://127.0.0.1:4000/login?uname=tom&upwd=123
// http://127.0.0.1:4000/addcart?lid=1&price=99&lname=ss
// http://127.0.0.1:4000/addcart?lid=1&price=99&lname=ss

//功能四:查询购物车信息
server.get("/findcart",(req,res)=>{
  //1:获取用户登录凭证uid
  var uid = req.session.uid;
  //2:没有uid 请登录
  if(!uid){
    res.send({code:-2,msg:"请登录",data:[]});
    return;
  }
  //3:创建sql语句
  var sql = "SELECT id,lid,lname,price,count FROM xz_cart WHERE uid = ?";
  //4:发送sql语句
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
  //5:将服务器返回结果发送脚手架 
})

//1:启动 mysql  
//2:启动 node app.js
//5:打开浏览器在地址栏输入 9:27
// http://127.0.0.1:4000/findcart
// http://127.0.0.1:4000/login?uname=tom&upwd=123
// http://127.0.0.1:4000/findcart\


//功能五:删除一条购物车数据
server.get("/del",(req,res)=>{
  //(0)判断用户是否登录
  var uid = req.session.uid;
  if(!uid){
   res.send({code:-2,msg:"请登录"});
   return;
  }
  //(1)参数
  var id = req.query.id;
  //(2)sql
  var sql = "DELETE FROM xz_cart WHERE id=?";
  //(3)json
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    //受影响行数
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})
// 测试
// 查询mysql xz_cart id是否有1
// node app.js
// http://127.0.0.1:4000/del?id=1
// http://127.0.0.1:4000/login?uname=tom&upwd=123
// http://127.0.0.1:4000/del?id=1
// http://127.0.0.1:4000/del?id=1
//11:35
//功能六:删除选中商品
//功能七:清空购物车
server.get("/delm",(req,res)=>{
 //判断是否登录
 var uid = req.session.uid;
 if(!uid){
    res.send({code:-2,msg:"请登录"})
    return;
 }
 //参数
 var id= req.query.id; 
 //sql
 var sql = `DELETE FROM xz_cart WHERE id IN (${id})`;
 //json
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   if(result.affectedRows>0){
     res.send({code:1,msg:"删除成功"})
   }else{
     res.send({code:-1,msg:"删除失败"})
   }
 })
});

// 测试
// 查询mysql xz_cart id是否有6,10
// 复制功能6
// node app.js
// http://127.0.0.1:4000/delm?id=6,10
// http://127.0.0.1:4000/login?uname=tom&upwd=123
// http://127.0.0.1:4000/delm?id=4,10
// http://127.0.0.1:4000/delm?id=11,12