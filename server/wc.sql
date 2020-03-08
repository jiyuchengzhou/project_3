#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS wc;
#创建数据库，设置存储的编码
CREATE DATABASE wc CHARSET=UTF8;
#进入创建的数据库
USE wc;
#创建保存用户信息的表
CREATE TABLE wc_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20),
  upwd VARCHAR(32),
  phone VARCHAR(11)
);
#插入数据
INSERT INTO wc_user VALUES(1,'dingding',"123456","15775965901");
INSERT INTO wc_user VALUES(2,'dangdang',"123456","15775965901");
INSERT INTO wc_user VALUES(3,'zhongtao',"123456","15775965901");
#创建保存首页数据的表
CREATE TABLE wc_product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  intr VARCHAR(64),
  price DECIMAL(7,2),  #99999.99
  src VARCHAR(64),
  src01 VARCHAR(64),
  src02 VARCHAR(64),
  src03 VARCHAR(64),
  src04 VARCHAR(64),
  src05 VARCHAR(64),
  guige VARCHAR(64)

);
#插入数据
INSERT INTO wc_product VALUES(1,"特价促销  诺瑞犬用羊乳钙片110g 220片 通用型幼犬怀孕狗 补钙",30,'img/souye/ex.jpg','img/details/1/1.jpg','img/details/1/2.jpg','img/details/1/3.jpg','img/details/1/4.jpg','img/details/1/5.jpg',"30g");
INSERT INTO wc_product VALUES(2,"特价促销  麦德氏超浓缩卵磷脂培根味680g 美毛亮毛滋养毛囊 680g",89,'img/details/2/01.jpg','img/details/2/1.jpg','img/details/2/2.jpg','img/details/2/3.jpg','img/details/2/4.jpg','img/details/2/5.jpg',"30g");
INSERT INTO wc_product VALUES(3,"特价促销  佳尔全价成猫粮1.5kg",55,'img/details/3/01.jpg','img/details/3/1.jpg','img/details/3/2.jpg','img/details/3/3.jpg','img/details/3/4.jpg','img/details/3/5.jpg',"30g");
INSERT INTO wc_product VALUES(4,"特价促销  哈美特 涤纶珠纹项圈带+牵引带  宠物牵引绳双色间色、 多色 间色双色 S",25,'img/details/4/01.jpg','img/details/4/1.jpg','img/details/4/2.jpg','img/details/4/3.jpg','img/details/4/4.jpg','img/details/4/5.jpg',"30g");
INSERT INTO wc_product VALUES(5,"特价促销  魔方 tea time 健体强心卵磷脂400g",50,'img/details/5/01.jpg','img/details/5/1.jpg','img/details/5/2.jpg','img/details/5/3.jpg','img/details/5/4.jpg','img/details/5/5.jpg',"30g");
INSERT INTO wc_product VALUES(6,"比瑞吉经典系列 成猫粮1.5kg  添加蛋黄块 1.5kg",100,'img/details/6/01.jpg','img/details/6/1.jpg','img/details/6/2.jpg','img/details/6/3.jpg','img/details/6/4.jpg','img/details/6/5.jpg',"1.5kg");
INSERT INTO wc_product VALUES(7,"开饭乐无谷美毛全期猫粮1.5kg 1.5kg",75,'img/details/7/01.jpg','img/details/7/1.png','img/details/7/2.jpg','img/details/7/3.jpg','img/details/7/4.jpg','img/details/7/5.jpg',"1.5kg");
INSERT INTO wc_product VALUES(8,"好之味海鲜味全期猫粮10kg幼猫成猫通用 10kg",130,'img/details/8/01.jpg','img/details/8/1.jpg','img/details/8/2.jpg','img/details/8/3.jpg','img/details/8/4.jpg','img/details/8/5.jpg',"10kg");
INSERT INTO wc_product VALUES(9,"艾尔森林物语系列 鸭肉&蔓越莓全期 猫粮1.5kg   1.5kg",90,'img/details/9/01.jpg','img/details/9/1.jpg','img/details/9/2.jpg','img/details/9/3.jpg','img/details/9/4.jpg','img/details/9/5.jpg',"1.5kg");
INSERT INTO wc_product VALUES(10,"艾尔解馋猫专用全价全期猫粮1.5kg 1.5kg",52,'img/details/10/01.jpg','img/details/10/1.jpg','img/details/10/2.jpg','img/details/10/3.jpg','img/details/10/4.jpg','img/details/10/5.jpg',"1.5kg");

#创建保存购物车数据的表
CREATE TABLE wc_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  intr VARCHAR(64),
  price DECIMAL(7,2),  #99999.99
  src VARCHAR(100),
  guige VARCHAR(64),
  yuanid INT,
  uid INT,
  count INT
);
#插入数据
-- INSERT INTO wc_cart VALUES(1,'特  英国K魔方 幼犬猫专用羊奶粉350g',88.00,'img/cart/1.png',"30g",1,1,1);


