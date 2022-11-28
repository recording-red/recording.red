<!-- https://next.vuetifyjs.com/en/components/navigation-drawers/ -->

<template>
  <div class="navbar">
    <div class="navbar-item"><Logo /></div>
    <div class="navbar-item navbar-item-shrink"><Search /></div>
    <div class="navbar-item">
      <InstrumentIcon class="padding-righ"/>
      <UserIcon />
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";

.navbar {
  background-color: $color-black;
  color: $color-white;
  min-height: 4em;
  min-width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.navbar-item {
  align-self: center;
  margin: 0em 1em 0em 1em;
}

.navbar-item-shrink {
  flex-shrink: 3;
}

.padding-righ {
  padding-right: 0.5em;
}

</style>

<script lang="ts">
import Logo from "@/components/navbar/Logo.vue";
import Search from "@/components/navbar/Search.vue";
import InstrumentIcon from "@/components/navbar/InstrumentIcon.vue";
import UserIcon from "@/components/navbar/UserIcon.vue";

export default {
  name: "NavBar",

  components: { Logo, Search, InstrumentIcon, UserIcon },
};
</script>
