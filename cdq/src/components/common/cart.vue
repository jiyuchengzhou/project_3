<template>
    <div class="page">
		<!-- 头部 -->
        <mt-header title="购物车">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button slot="right">管理</mt-button>
    	</mt-header>
		<!-- 商品列表 -->
		<div class="product">
			<div class="g1">
				<input type="checkbox" class="p-center">
			</div>
			<div class="g2">
				<img class="cart_img" src="../img/cart/1.png" alt="">
			</div>
			<div class="g3">
				<div class="intr">特价促销  英国K魔方 幼犬猫专用羊奶粉350g</div>
				<div class="guige"><span>规格:</span><span>350g</span></div>
				<div>
					<span class="price"><span>¥</span> <span>88.00</span></span>
					<div class="f-r">	
						<span>+</span><input type="text" value="1" class="pri-num"><span>－</span>
					</div>
				</div>

			</div>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.cart_img{
	width:100%;
}
.p-center{
	position:relative;
	top:50%;
	transform:translate(-50%,-50%)
}
.f-r{
	float:right;
}
.pri-num{
	width:20px;
	border:0;
	outline:none;
	text-align: center;
}
.price{
	line-height: 35px;
    font-size: 0.75rem;
	color:#f56456;
}
.guige{
	line-height: 0.7rem;
	font-size: 0.5rem;
    color: #999;
}
.intr{
	display: block;
    height: 1.6rem;
    line-height: 0.8rem;
    overflow: hidden;
    font-size: 0.6rem;
    color: #353535;
}
.g3{
	margin-left:20px;
}
.g2{
	width:23%;
	height:auto;
	border:1px solid black;
}
.g1{
	width:11%;
	text-align: center;
}
.product{
	background: white;
	display: flex;
	padding: 10px;
	border-radius:1rem;
}
.mint-header{
	color: #000;
	height: 50px;
	font-size: 18px;
	background-color: rgb(255, 255, 255);
	margin-bottom:20px;
}
.page{
	background:rgb(242, 242, 242);
}
</style>>