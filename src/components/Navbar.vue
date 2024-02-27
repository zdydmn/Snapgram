<template>
  <div class="w-270 h-full px-6 py-8 bg-dark3 text-white flex flex-col justify-between">
    <div class="gap-y-11">
      <div><img src="../assets/Logo.svg" alt="SVG Image" /></div>
      <div class="my-11 flex items-center gap-x-6 hover:cursor-pointer" @click="activeFn(-1, '/user')"
        :class="[isActive === -1 ? 'active' : '']">
        <img src="../assets/header.png" class="w-14 h-14 rounded-full" />
        <div>
          <div class="text-light2 font-bold text-lg">Lewis Hamilton</div>
          <div class="text-light3 font-normal text-lg">@Lewishamilton</div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in my_router" :key="item.name"
          class="nav-item flex gap-x-6 items-center hover:cursor-pointer hover:bg-gray-700 font-medium cursor:pointer rounded-lg mb-2.5"
          :class="[isActive === index ? 'active nav-active' : '']" @click="activeFn(index, item.path)">
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
        <img class="w-6 h-6 fill-light2" src="../assets/Settings.svg" alt="SVG Image" />
        <div class="text-light2 text-lg">Settings</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()
const isActive = ref();
const my_router = [
  {
    name: "Home",
    icon: "/src/assets/Home.svg",
    path: '/'
  },
  {
    name: "Explore",
    icon: "/src/assets/Explore.svg",
    path: '/explore'
  },
  {
    name: "People",
    icon: "/src/assets/People.svg",
    path: '/people'
  },
  {
    name: "Saved",
    icon: "/src/assets/Saved.svg",
    path: '/saved'
  },
  {
    name: "Reels",
    icon: "/src/assets/Reels.svg",
    path: '/reels'
  },
  {
    name: "Chats",
    icon: "/src/assets/Chats.svg",
    path: '/chats'
  },
  {
    name: "Create Post",
    icon: "/src/assets/CreatePost.svg",
    path: '/createPost'
  },
];

watch(() => route.path, ( _old ,newVal) => {
  if (!newVal) return
  
  const { path } = route;
  const index = my_router.findIndex((item) => item.path === path)
  isActive.value = index
}, {
  deep: true, // 深度监听
  immediate: true // 在初始化时立即执行回调函数
})

const activeFn = (index: number, path: string) => {
  isActive.value = index;
  router.push(path)
};

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
</style>