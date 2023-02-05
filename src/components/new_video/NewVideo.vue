<template>
  <div class="new-video">
    <div class="video-panel">
      <VideoPanel />
    </div>
    <div class="upload-miniature">
      <UploadMiniature />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-panel {
  width: 60%;
  float: left;
  margin-right: 5px;
}

.upload-miniature {
  width: 35%;
  float: right;
}
</style>

<script lang="ts">
import VideoPanel from "@/components/new_video/VideoPanel.vue";
import UploadMiniature from "@/components/new_video/UploadMiniature.vue";

export default {
  name: "NewVideo",

  components: { VideoPanel, UploadMiniature },
};
</script>
