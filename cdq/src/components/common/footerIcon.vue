<template>
<div>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" src="../img/footer/1.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="../img/footer/2.png">
            产品分类
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="../img/footer/3.png">
            购物车
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="../img/footer/4.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
       

    }
}
</script>
<style scoped>

</style>

