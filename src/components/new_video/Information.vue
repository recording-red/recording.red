<template>
  <div class="upload">
    <div class="title">
      <img :src="information" style="height=25px;width:25px;" /> ETAPE 2:
      INFORMATION
    </div>
    Redigez la description de votre video, puis cliquez sur suivant.
    <br />
    <hr color="gray" />
  </div>
</template>

<style lang="scss" scoped>
.upload {
  border: gray;
  border-style: solid;
  border-width: 0.05em;
  min-height: 100vh;
}

.title {
  font-size: x-large;
}
</style>

<script lang="ts">
import Information from "@/assets/nav/information_black.png";
import MiniatureUpload from "@/components/new_video/MiniatureUpload.vue";

export default {
  name: "UploadMiniature",

  components: { MiniatureUpload },

  data() {
    return {
      information: Information,
    };
  },
};
</script>
