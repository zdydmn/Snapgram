<template>
  <div class="w-270 h-lvh px-6 py-8 bg-dark3 text-white flex flex-col justify-between">
    <div class="gap-y-11">
      <div><img src="../assets/Logo.svg" alt="SVG Image" /></div>
      <div class="my-11 flex items-center gap-x-6 hover:cursor-pointer" @click="activeFn(99)" :class="[isActive === 99 ? 'active' : '']">
        <img src="../assets/header.png" class="w-14 h-14 rounded-full" />
        <div>
          <div class="text-light2 font-bold text-lg">Lewis Hamilton</div>
          <div class="text-light3 font-normal text-lg">@Lewishamilton</div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in router" :key="item.name"
          class="nav-item flex gap-x-6 items-center hover:cursor-pointer hover:bg-gray-700 font-medium cursor:pointer rounded-lg mb-2.5"
          :class="[isActive === index ? 'active nav-active' : '']" @click="activeFn(index)">
          <img class="w-6 h-6 stroke-white" :src="item.icon" alt="SVG Image" />
          <div class="text-light2 text-lg">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="nav-item flex gap-x-6 items-center hover:cursor-pointer hover:bg-gray-700 font-medium cursor:pointer rounded-lg mb-2.5">
        <img class="w-6 h-6 stroke-light2" src="../assets/Logout.svg" alt="SVG Image" />
        <div class="text-light2 text-lg">Logout</div>
      </div>
      <div
        class="nav-item flex gap-x-6 items-center hover:cursor-pointer hover:bg-gray-700 font-medium cursor:pointer rounded-lg mb-2.5">
        <img class="w-6 h-6 fill-light2 newFall" src="../assets/Settings.svg" alt="SVG Image" />
        <div class="text-light2 text-lg">Settings</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isActive = ref(0);

const activeFn = (index: number) => {
  isActive.value = index;
};
const router = [
  {
    name: "Home",
    icon: "/src/assets/Home.svg",
  },
  {
    name: "Explore",
    icon: "/src/assets/Explore.svg",
  },
  {
    name: "People",
    icon: "/src/assets/People.svg",
  },
  {
    name: "Saved",
    icon: "/src/assets/Saved.svg",
  },
  {
    name: "Reels",
    icon: "/src/assets/Reels.svg",
  },
  {
    name: "Chats",
    icon: "/src/assets/Chats.svg",
  },
  {
    name: "Create Post",
    icon: "/src/assets/CreatePost.svg",
  },
];
</script>

<style scoped>
.nav-item {
  height: 56px;
  padding: 10px;
}

.active {
  position: relative;
}

.nav-active {
  background: #877eff !important;
  font-weight: 700;
  transition: all 0.3s;
}

.active::before {
  content: "";
  background: #877eff;
  position: absolute;
  top: 3px;
  left: -32px;
  height: 50px;
  width: 15px;
  border-radius: 90%;
  animation: identifier 0.3s;
}

.nav-active img {
  filter: drop-shadow(#fff 100px 0);
  transform: translateX(-100px);
}

@keyframes identifier {
  0% {
    left: -40px;
  }

  100% {
    left: -32px;
  }
}

.newFall {
  fill: red !important;
}
</style>