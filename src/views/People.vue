<template>
    <div>
        <div class="w-96 h-96 overflow-hidden relative rounded-3xl " style="margin: 50px auto;">
            <div class="flex transition-all" :style="{ transform: `translateX(${num}px)` }">
                <!-- 图片变换 -->
                <img v-for="(item, index) in arraaa" :key="index" :src="item" class="w-96 h-96" />
            </div>
            <div class="absolute gap-x-4 flex bottom-2 right-1/2 translate-x-2/4">
                <div class="w-2.5 h-2.5 bg-light4 rounded-full hover:bg-white transition-all hover:cursor-pointer"
                    :class="[isActive === ind ? 'bg-white' : '']" v-for="(i, ind) in arraaa" :key="i" @click="jump(ind)">
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
const arraaa = ['src/assets/img1.png', 'src/assets/testImg.png', 'src/assets/header.png']
const num = ref(0)
const isActive = ref(0);

const fn = () => {
    if (num.value === -((arraaa.length - 1) * 384)) {
        return
    }
    num.value = num.value - 384
    isActive.value += 1
}

const fn2 = () => {
    if (num.value === 0) {
        return
    }
    num.value = num.value + 384
    isActive.value -= 1
}

const jump = (ind: number) => {
    isActive.value = ind;
    num.value = ind * - 384
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