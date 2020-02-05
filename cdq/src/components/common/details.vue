<template>
    <div>
        <!-- 轮播图区域 -->
        <div class="_swiper">     
            <swiper   :options="swiperOption" touch-action=none;>
                <swiper-slide>
                    <img  src="../img/details/1/1.jpg" class="swiper_img" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../img/details/1/2.jpg" class="swiper_img" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../img/details/1/3.jpg" class="swiper_img" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../img/details/1/4.jpg" class="swiper_img" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../img/details/1/5.jpg" class="swiper_img" alt="">
                </swiper-slide>           
            </swiper>
        </div>
    </div>
</template>
<script>
// 引入swiper组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 name: '',
  data () {
    return {
      swiperOption:{
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 10,
        loop:true,
    
        //分页器
        pagination:{
            el:".swiper-pagination",
        },
        speed:600, //config参数同swiper4,与官网一致
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>
<style scoped>
    .swiper_img{
        width:100%;
        height:auto;
    }
    ._swiper{
        width:100%;
        overflow: hidden;
    }
</style>