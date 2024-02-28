<template>
    <div>
        <div class="w-imgCardW h-imgCardH overflow-hidden relative rounded-3xl">
            <div class="flex w-max transition-all w-full h-full items-center"
                :style="{ transform: `translateX(${num}px)` }">
                <!-- 图片变换 -->
                <!-- <div v-for="(item, index) in  arraaa " :id="item" :key="index" :style="{
                    background: index === 0 ? 'red' :
                        (index === 1 ? 'yellow' : 'green')
                }" class="w-full h-full flex-auto">

                </div> -->
                <img v-for="(item, index) in arraaa" :id="item" :key="index" :src="item"
                    class="w-imgCardW h-imgCardH grow-0" />
            </div>
            <div class="absolute gap-x-4 flex bottom-2 right-1/2 translate-x-2/4">
                <div class="w-2.5 h-2.5 bg-light4 rounded-full hover:bg-white transition-all hover:cursor-pointer"
                    :class="[isActive === ind ? 'bg-white' : '']" v-for="( i, ind ) in  arraaa " :key="i"
                    @click="jump(ind)">
                </div>
            </div>
            <div class="absolute bottom-1/2 right-2">
                <button @click="fn"
                    class=" w-7 h-7 rounded-full bg-imgButton flex items-center justify-center hover-img-button">
                    <img src="@/assets/right.svg" class="right">
                </button>
            </div>
            <div class="absolute bottom-1/2 left-2">
                <button @click="fn2"
                    class=" w-7 h-7 rounded-full bg-imgButton flex items-center justify-center hover-img-button">
                    <img src="@/assets/left.svg" class="left">
                </button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
const arraaa = ['src/assets/img1.png', 'src/assets/img2.png', 'src/assets/header.png']
const num = ref(0)
const isActive = ref(0);

const fn = () => {
    if (isActive.value === arraaa.length - 1) {
        return
    }
    num.value = num.value - 700
    isActive.value += 1
}

const fn2 = () => {
    if (isActive.value === 0) {
        return
    }
    num.value = num.value + 700
    isActive.value -= 1
}

const jump = (ind: number) => {
    isActive.value = ind;
    num.value = ind * - 700
}
</script>


<style scoped>
.hover-img-button:hover {
    background-color: #fff;
}

.hover-img-button:hover .right {
    filter: drop-shadow(#000 -100px 0);
    transform: translateX(100px);
}

.hover-img-button:hover .left {
    filter: drop-shadow(#000 100px 0);
    transform: translateX(-100px);
}
</style>