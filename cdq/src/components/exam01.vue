<template>
    <div>
        <div>{{ss.btn[1]}}</div>
        <div @click="add()">加</div>
        <div v-if="key"></div>
    </div>
</template>
<script>
export default {
    data(){
　　return {
　　　ss:{btn:[2,3,4]},
        key:false,
　　}
},
watch:{
　　
},
methods:{　　
　　add(){
    this.ss.btn[1]++;
    if(this.key==false){
        this.key=true;
    }else{
        this.key=false;
    }
    
    
}
},
computed:{
    
}

}
</script>
<style scoped>
    
</style>