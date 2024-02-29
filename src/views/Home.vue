<template>
    <div class="flex items-start h-full">
        <div class="bg-dark1 flex-1 text-white h-full p-28 overflow-y-auto flex flex-col items-center gap-y-24 ">
            <div class="h-48 w-asd">
                <RollComponent>
                    <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item"
                        class="header-border w-30 h-30 flex items-center justify-center rounded-full shrink-0">
                        <img class="w-28 h-28 rounded-full border-black border-4" src="../assets/testImg.png" alt="">
                    </div>
                </RollComponent>
            </div>
            <div class="w-full gap-y-16 flex flex-col items-center">
                <div class=" w-full flex justify-between items-center">
                    <div class="font-bold text-4xl font-sans">Home Feed</div>
                    <button
                        class="w-22 text-lg h-12 bg-dark3 rounded-xl flex justify-center items-center gap-3 px-4 py-3 text-lg">All
                        <img src="@/assets/filter.svg" alt=""></button>
                </div>
                <div class="flex flex-col gap-y-16">
                    <HomeTrendsCard v-for="item in trendsList" :key="item.id" :cardInfo="item" />
                </div>
            </div>
            <div class="w-full flex flex-col justify-center items-center gap-y-6">
                <div class="flex w-full justify-between items-center">
                    <div class="font-bold text-3xl font-sans">Suggestions for you</div>
                    <button class="text-yello1 text-lg">See All</button>
                </div>
                <div class="h-48 w-asd">
                    <RollComponent>
                        <UserCard v-for="item in [1, 2, 3, 4, 6, 7]" :key="item" />
                    </RollComponent>
                </div>
            </div>
        </div>
        <div class="bg-dark2 w-465px text-white h-full px-6 py-14 flex flex-col justify-between">
            <div class="font-bold text-3xl font-sans">Top Creators</div>
            <div class="grid grid-cols-2 gap-y-6 gap-x-4">
                <UserCard v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]" :key="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserCard from '../components/UserCard.vue';
import HomeTrendsCard from '@/components/HomeTrendsCard/index.vue';
import RollComponent from '@/components/RollComponent.vue';

const trendsList = [
    {
        id: 0,
        desp: "It's a big world out there - explore!",
        tag: ["nature", "mountains"],
        create_time: "26 June at 09:32 PM",
        user_info: {
            header_img: 'src/assets/header.png',
            name: 'Lewis Hamilton'
        },
        type: "imageText",
        img_list: ['src/assets/img1.png', 'src/assets/img2.png'],
        isLike: true,
        isCollect: true,
        like_num: 11,
        comment_num: 68,
        forward_num: 74
    },
    {
        id: 1,
        desp: "This is my First Post!!!",
        create_time: "26 June at 09:30 PM",
        user_info: {
            header_img: 'src/assets/header.png',
            name: 'Lewis Hamilton'
        },
        type: "text",
        isLike: false,
        isCollect: false,
        like_num: 0,
        comment_num: 0,
        forward_num: 0
    },
    {
        id: 2,
        desp: "My beautiful photos!",
        create_time: "26 June at 08:30 PM",
        user_info: {
            header_img: 'src/assets/testImg.png',
            name: 'Annette Black'
        },
        type: "imageText",
        img_list: ['src/assets/testImg.png'],
        isLike: false,
        isCollect: false,
        like_num: 0,
        comment_num: 0,
        forward_num: 0
    }
]
</script>

<!-- <script setup lang="'ts'">
// import UserCard from '../components/UserCard.vue'
</script> -->

<style scoped>
.header-border {
    background: linear-gradient(180deg, #877EFF 0%, #685DFF 46.15%, #3121FF 100%);
}</style>