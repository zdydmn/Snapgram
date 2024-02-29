<template>
    <div class="relative w-full h-full overflow-hidden  flex items-center gap-x-4">
        <div class="overflow-x-auto flex items-center gap-x-4">
            <slot></slot>
        </div>
        <!-- <div class="absolute right-2">
            <button class=" w-7 h-7 rounded-full bg-imgButton flex items-center justify-center hover-img-button" @click="leftFn">
                <img src="@/assets/right.svg" class="right">
            </button>
        </div> -->
    </div>
</template>

<script setup lang="ts">
// const leftFn = () => {

// }
</script>

<!-- <style scoped>
.hover-img-button:hover {
    background-color: #fff;
}

.hover-img-button:hover .right {
    filter: drop-shadow(#000 -100px 0);
    transform: translateX(100px);
}
</style> -->