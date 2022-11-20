<!-- https://next.vuetifyjs.com/en/components/navigation-drawers/ -->

<template>
  <div
    class="d-flex justify-center"
    style="background-color: black; color: white; align-items: center"
  >
    <Logo class="pa-2" />
    <Search class="pa-2" />
    <SearchIcon class="pa-2" />
    <InstrumentIcon class="pa-2" />
    <UserIcon class="pa-2" />
  </div>

  <!-- <v-app-bar color="black"> -->
  <!-- <div class="d-flex justify-space-around mb-6" flat tile>
      <div v-for="n in 3" :key="n" class="pa-2" >
        justify-space-around
      </div>
    </div> -->
  <!-- </v-app-bar> -->
  <!-- <div color="black">
    <v-card
      class="d-flex flex-row mb-6"
      flat
      tile
    >
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item {{ n }}
      </v-card>
    </v-card>
  </div> -->

  <!-- <v-app-bar color="black">
    <Logo />

    <v-spacer />

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar> -->
</template>

<script lang="ts">
import Logo from "@/components/navbar/Logo.vue";
import Search from "@/components/navbar/Search.vue";
import SearchIcon from "@/components/navbar/SearchIcon.vue";
import InstrumentIcon from "@/components/navbar/InstrumentIcon.vue";
import UserIcon from "@/components/navbar/UserIcon.vue";

export default {
  name: "NavBar",

  components: { Logo, Search, SearchIcon, InstrumentIcon, UserIcon },
};
</script>
