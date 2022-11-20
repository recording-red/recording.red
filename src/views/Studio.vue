<template>
  <Header />
  <VideoTable />
</template>

<script lang="ts">
import Header from "@/components/studio/Header.vue";
import VideoTable from "@/components/studio/VideoTable.vue";

export default {
  name: "Studio",

  components: { Header, VideoTable },

  props: {},
};
</script>
