<template>
    <div class="info">
        <!-- <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
                当前slider索引{{ item }}
            </swiper-slide>
        </swiper><br/> -->
        详情&nbsp;&nbsp;&nbsp;&nbsp;：{{ this.$route.params.id }}
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:"info",
        components:{
        swiper,
        swiperSlide
    },
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperSlides: [1, 2, 3, 4, 5]
        }
    }
}
</script>
<style scoped lang="scss">
.swiper-slide{
    background-color:red;
}
</style>
