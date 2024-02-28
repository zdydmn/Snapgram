<template>
    <div class="bg-dark2 rounded-3xl border border-dark4 px-12 py-14 gap-y-5 flex flex-col w-asd">
        <div class="flex justify-between items-start">
            <div class="flex items-center gap-x-4">
                <img src="@/assets/header.png" alt="" class="rounded-full w-12 h-12">
                <div>
                    <div class="text-light2 font-bold text-lg">Lewis Hamilton</div>
                    <div class="text-light3 font-normal text-sm">26 June at 09:32 PM</div>
                </div>
            </div>
            <div>
                <button>
                    <img src="@/assets/edit.svg" alt="">
                </button>
            </div>
        </div>
        <div>
            It's a big world out there - explore!
            <!-- #nature #mountains -->
        </div>
        <div>
            <ImageDisplay />
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
                    <span>68</span>
                </div>
                <div class="flex items-center gap-1">
                    <button>
                        <img src="@/assets/forward.svg" alt="">
                    </button>
                    <span>74</span>
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
import { ref } from 'vue';
import ImageDisplay from './ImageDisplay.vue';

const isCollect = ref(false)
const isLike = ref(false)
const likeNum = ref(10)

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