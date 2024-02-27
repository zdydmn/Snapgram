import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/explore', component: () => import('../views/Explore.vue') },
    { path: '/people', component: () => import('../views/People.vue') },
    { path: '/saved', component: () => import('../views/Saved.vue') },
    { path: '/reels', component: () => import('../views/Reels.vue') },
    { path: '/chats', component: () => import('../views/Chats.vue') },
    { path: '/createPost', component: () => import('../views/CreatePost.vue') },
    { path: '/user', component: () => import('../views/User.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;

// const router = [
//     {
//       name: "Home",
//       icon: "/src/assets/Home.svg",
//     },
//     {
//       name: "Explore",
//       icon: "/src/assets/Explore.svg",
//     },
//     {
//       name: "People",
//       icon: "/src/assets/People.svg",
//     },
//     {
//       name: "Saved",
//       icon: "/src/assets/Saved.svg",
//     },
//     {
//       name: "Reels",
//       icon: "/src/assets/Reels.svg",
//     },
//     {
//       name: "Chats",
//       icon: "/src/assets/Chats.svg",
//     },
//     {
//       name: "Create Post",
//       icon: "/src/assets/CreatePost.svg",
//     },
//   ];