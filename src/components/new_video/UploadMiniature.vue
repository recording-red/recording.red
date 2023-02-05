<template>
  <div class="upload">
    <div class="title">
      <img :src="upload" style="height=25px;width:25px;" /> ETAPE 1: UPLOAD DES
      FICHIERS
    </div>
    Completer le titre de la video, uploader la video et le vignette et cliquez
    sur suivant.
    <br />
    <hr color="gray" />
    <MiniatureUpload />
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
import Upload from "@/assets/nav/upload.png";
import MiniatureUpload from "@/components/new_video/MiniatureUpload.vue";

export default {
  name: "UploadMiniature",

  components: { MiniatureUpload },

  data() {
    return {
      upload: Upload,
    };
  },
};
</script>
