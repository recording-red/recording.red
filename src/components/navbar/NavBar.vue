<!-- https://next.vuetifyjs.com/en/components/navigation-drawers/ -->

<template>
  <div class="navbar">
    <div class="navbar-item">
      <Logo class="logo" />
      <SmallLogo class="small-logo" />
    </div>
    <div class="navbar-item navbar-item-shrink"><Search class="search" /></div>
    <div class="navbar-item padding-top">
      <InstrumentIcon class="instrument-icon padding-right" />
      <UserIcon class="user-icon" />
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

.padding-right {
  padding-right: 0.8em;
}

.padding-top {
  padding-top: 0.5em;
}

.small-logo {
  visibility: hidden;
  max-width: 0em;
}

@media screen and (max-width: 750px) {
  .logo {
    visibility: hidden;
    max-width: 0em;
  }
  .small-logo {
    visibility: visible;
    max-width: 2.5em;
  }
  .search {
    max-width: 26vw;
  }
  .instrument-icon {
    max-width: 2em;
  }
  .user-icon {
    max-width: 2em;
  }
  .padding-right {
    padding-right: 0.4em;
  }
}
</style>

<script lang="ts">
import Logo from "@/components/navbar/Logo.vue";
import SmallLogo from "@/components/navbar/SmallLogo.vue";
import Search from "@/components/navbar/Search.vue";
import InstrumentIcon from "@/components/navbar/InstrumentIcon.vue";
import UserIcon from "@/components/navbar/UserIcon.vue";

export default {
  name: "NavBar",

  components: { Logo, SmallLogo, Search, InstrumentIcon, UserIcon },
};
</script>
