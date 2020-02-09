<template>
	<div>
		<div class="page">
			<!-- 头部 -->
			<mt-header class="fixed" title="购物车">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right">管理</mt-button>
			</mt-header>
			<div style="height:58px;"></div>
			<!-- 商品列表 -->
			<!-- 循环生成 -->
			<div id="cart_pro">
				<div class="product" v-for="(item,i) in products" :key=i>
					<div class="g1">
						<input type="checkbox" class="p-center" @click="singleChecked()" >
					</div>
					<div class="g2">
						<img class="cart_img" :src="item.src" alt="">
					</div>
					<div class="g3">
						<div class="intr">{{item.name}}</div>
						<div class="guige"><span>规格:</span><span>{{item.guige}}</span></div>
						<div>
							<span class="price"><span>¥</span> <span>{{item.price}}</span></span>
							<div class="f-r">	
								<span @click="jian($event)">－</span><input type="text" value="1" class="pri-num"><span @click="add($event)">+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 全选那排 -->
			<div style="display:flex;height:50px;line-height:50px;background:white;position:fixed;bottom:55px;width:100%;z-index=3;">
				<div class="w-30">
					<input class="ml-17" type="checkbox" :checked="isAllChecked" v-on:click='chooseAll()'>
					<span>全选</span>
				</div>
				<div class="w-40 ">
					<div class="f-r">
						<span>合计:</span>
						<span class="total">¥{{total_p}}</span>
					</div>
				</div>
				<mt-button class="w-30 mt_5">
					去结算
				</mt-button>
			</div>

		</div>
		<!-- 撑开位置 -->
		<div class="cheng"></div>
	</div>
</template>
<script>
export default {
    data(){
		return{
			products:[
				{src:require('../img/cart/1.png'),name:'特价促销  英国K魔方 幼犬猫专用羊奶粉350g',guige:'350g',price:'88.00'},
				{src:require('../img/cart/1.png'),name:'特价促销  英国K魔方 幼犬猫专用羊奶粉350g',guige:'350g',price:'88.00'},
				{src:require('../img/cart/1.png'),name:'特价促销  英国K魔方 幼犬猫专用羊奶粉350g',guige:'350g',price:'88.00'},
				
			],
			isAllChecked:false,
			total_p:'0.00',
		}
	},

	methods:{
		// 单选
		singleChecked(){
			//判断每一个CheckBox是否选中，全选中让全选按钮选中
			if(this.products.length == document.querySelectorAll('#cart_pro :checked').length){ 
				this.isAllChecked = true;
			}else{  // 只要有一个checkbox不选中，让全选按钮不选中
				this.isAllChecked = false;
			}
			// 计算总价
			var sum=0
			for(var i=0;i<document.querySelectorAll('#cart_pro :checked').length;i++){
				var price=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].firstChild.lastChild.innerHTML
				var num=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].lastChild.childNodes[1].value
				sum=num*price+sum
			}
			this.total_p=sum.toFixed(2)
		},
		// 全选
		chooseAll(){
			if(this.isAllChecked==false){
				this.isAllChecked=true
				for(var i=0;i<document.querySelectorAll('#cart_pro .p-center').length;i++){
					document.querySelectorAll('#cart_pro .p-center')[i].checked=true
				}	
			}else{
				this.isAllChecked=false
				for(var i=0;i<document.querySelectorAll('#cart_pro .p-center').length;i++){
					document.querySelectorAll('#cart_pro .p-center')[i].checked=false
				}	
			}

			// 计算总价
			var sum=0
			for(var i=0;i<document.querySelectorAll('#cart_pro :checked').length;i++){
				var price=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].firstChild.lastChild.innerHTML
				var num=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].lastChild.childNodes[1].value
				sum=num*price+sum
			}
			this.total_p=sum.toFixed(2)
		},
		//计算总价
		total_price(){
			var sum=0
			for(var i=0;i<document.querySelectorAll('#cart_pro :checked').length;i++){
				var price=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].firstChild.lastChild.innerHTML
				var num=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].lastChild.childNodes[1].value
				sum=num*price+sum
			}
			this.total_p=sum.toFixed(2)
		},
		// 减少数量
		jian(e){
			if(e.target.nextElementSibling.value==1){
				return
			}else{
				e.target.nextElementSibling.value=e.target.nextElementSibling.value*1-1	
				// 计算总价
				var sum=0
				for(var i=0;i<document.querySelectorAll('#cart_pro :checked').length;i++){
					var price=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].firstChild.lastChild.innerHTML
					var num=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].lastChild.childNodes[1].value
					sum=num*price+sum
				}
				this.total_p=sum.toFixed(2)
			}
		},
		//增加数量
		add(e){
			e.target.previousElementSibling.value=e.target.previousElementSibling.value*1+1	
			// 计算总价
			var sum=0
			for(var i=0;i<document.querySelectorAll('#cart_pro :checked').length;i++){
				var price=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].firstChild.lastChild.innerHTML
				var num=document.querySelectorAll('#cart_pro :checked')[i].parentElement.nextElementSibling.nextElementSibling.childNodes[2].lastChild.childNodes[1].value
				sum=num*price+sum
			}
			this.total_p=sum.toFixed(2)
		}
		
    
    },


};


</script>
<style scoped>
	.mint-button--default{
		background: #f56456;
		color:white;
	}
	.ml-17{
		margin-left:17px;
	}
	.total{
		color:#f56456;
		font-weight: 700;
		font-size: 20px;
		margin-right: 10px	
	}
	.mt_5{
		margin-top: 5px;
	}
	.w-40{
		width:40%;
	}
	.w-30{
		width:30%;
	}
	.g3 .f-r>span{
		display: inline-block;
		border: 1px solid  black;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		text-align: center;
		margin: 5px;
	}
	.fixed{
		position:fixed;
		width:100%;
		z-index: 2;
	}
	.cheng{
		height:120px;
	}
	.cart_img{
		width:100%;
	}
	.p-center{
		position:relative;
		top:50%;
		transform:translate(-50%,-50%);
		z-index:0;
	}
	.f-r{
		float:right;
	}
	.pri-num{
		width:20px;
		border:0;
		outline:none;
		text-align: center;
		border: 1px solid black;
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
		box-shadow: 0 0 5px 5px rgba(200,200,200,0.1);
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