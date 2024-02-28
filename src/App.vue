

<template>
  <div class="flex h-screen min-h-1024 overflow-y-hidden">
    <Navbar />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<style scoped></style>
