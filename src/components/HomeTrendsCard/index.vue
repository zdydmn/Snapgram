<template>
    <div class="bg-dark2 rounded-3xl border border-dark4 px-12 py-14 gap-y-5 flex flex-col w-asd">
        <div class="flex justify-between items-start">
            <div class="flex items-center gap-x-4">
                <img :src="cardInfo?.user_info.header_img" alt="" class="rounded-full w-12 h-12">
                <div>
                    <div class="text-light2 font-bold text-lg">{{ cardInfo?.user_info.name }}</div>
                    <div class="text-light3 font-normal text-sm">{{cardInfo?.create_time}}</div>
                </div>
            </div>
            <div v-if="user_info.name === cardInfo?.user_info.name ">
                <button>
                    <img src="@/assets/edit.svg" alt="">
                </button>
            </div>
        </div>
        <div>
            {{cardInfo?.desp}}
            <!-- #nature #mountains -->
        </div>
        <div v-if="cardInfo?.type === 'imageText'">
            <ImageDisplay :img_list="cardInfo?.img_list"/>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-7">
                <div class="flex items-center gap-1">
                    <button @click="liketFn">
                        <img v-show="!isLike" src="@/assets/like.svg" alt="">
                        <img v-show="isLike" src="@/assets/like_active.svg" alt="">
                    </button>
                    {{ likeNum }}
                </div>
                <div class="flex items-center gap-1">
                    <button>
                        <img src="@/assets/commit.svg" alt="">
                    </button>
                    <span>{{cardInfo?.comment_num}}</span>
                </div>
                <div class="flex items-center gap-1">
                    <button>
                        <img src="@/assets/forward.svg" alt="">
                    </button>
                    <span>{{cardInfo?.forward_num}}</span>
                </div>
            </div>
            <div>
                <button @click="collectFn">
                    <img v-show="!isCollect" src="@/assets/collect.svg" alt="">
                    <img v-show="isCollect" src="@/assets/collect_active.svg" alt="">
                </button>
            </div>
        </div>
        <div class="flex items-center gap-x-2">
            <img src="@/assets/header.png" alt="" class="rounded-full w-10 h-10">
            <div class="flex flex-1 items-center">
                <input class="w-full  h-12 bg-dark3 px-4 rounded-l-lg placeholder:text-light4 focus:outline-none focus:border-0" placeholder="Write your comment..." />
                <button
                    class=" right-4 w-12 h-12 bg-dark3 flex justify-center items-center rounded-r-lg">
                    <img src="@/assets/send.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import ImageDisplay from './ImageDisplay.vue';
import { useUserInfoStore } from '../../store/index';
const {cardInfo} = defineProps({
    cardInfo: Object
})
const user_info = useUserInfoStore()
const isCollect = ref(cardInfo?.isCollect)
const isLike = ref(cardInfo?.isLike)
const likeNum = ref(cardInfo?.like_num)


const collectFn = () => {
    isCollect.value = !isCollect.value;
}

const liketFn = () => {
    isLike.value = !isLike.value;
    if (isLike.value) {
        likeNum.value++
    } else {
        likeNum.value--
    }
}


</script>