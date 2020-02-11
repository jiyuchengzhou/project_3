<template>
    <div>
        <router-link :to="{path:'/details',query:{ id:item.NewsID }}">跳转</router-link>
    </div>
</template>
<script>
export default {
    data(){
　　return {
　　　　item:{NewsID:123}
　　}
},
watch:{
　　
},
methods:{　　
　　
}

}
</script>
<style scoped>
    
</style>