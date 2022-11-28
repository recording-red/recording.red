<template>
  <Channel />
  <!-- <Header /> -->
  <!-- <VideoTable /> -->
</template>

<script lang="ts">
import Header from "@/components/studio/Header.vue";
import VideoTable from "@/components/studio/VideoTable.vue";
import Channel from "@/views/Channel.vue";

export default {
  name: "Studio",

  components: { Header, VideoTable, Channel },
};
</script>
