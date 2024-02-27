<template>
    <div class="flex items-start h-full">
        <div class="bg-dark1 flex-1 text-white h-full p-20 ">
            <!-- <div class="flex items-center">
                <div class="flex gap-x-8 w-11/12 items-center">
                    <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" class="header-border w-85px h-85px flex items-center justify-center rounded-full">
                        <img class="w-20 h-20 rounded-full border-black border-4" src="../assets/testImg.png" alt="">
                    </div>
                </div>
                <div>asd</div>
            </div> -->
            content
        </div>
        <div class="bg-dark2 w-465px text-white h-full px-6 py-14 flex flex-col justify-between">
            <div class="font-bold text-3xl font-sans">Top Creators</div>
            <div class="grid grid-cols-2 gap-y-6 gap-x-4">
                <UserCard v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]" :key="item"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserCard from '../components/UserCard.vue'
</script>

<!-- <script setup lang="'ts'">
// import UserCard from '../components/UserCard.vue'
</script> -->

<style scoped>
.header-border {
    background: linear-gradient(180deg, #877EFF 0%, #685DFF 46.15%, #3121FF 100%);
}
</style>