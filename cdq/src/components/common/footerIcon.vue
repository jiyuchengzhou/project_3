<template>
<div>
 <button @click="cx">123456</button>
 <h1>{{result}}</h1>
</div>
</template>
<script>
export default {
    data(){
        return{
            result:"1"
        }
    },
    methods:{
        cx(){
            console.log(2)
            var url="login";
            this.axios.get(url).then(res=>{
            console.log(1);
            console.log(res.data);
            this.result=res.data;    
            }) 
        }
    }
}
</script>
<style scoped>

</style>

