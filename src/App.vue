<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";

.container {
  padding: 6em 6em 6em 6em;

}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
</script>
