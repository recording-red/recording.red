<template>
  <h1>Fond d'écran</h1>

  <div class="image-upload-container">
    <ImageUpload />
  </div>
</template>

<style lang="scss" scoped>
.image-upload-container {
  height: 20em;
}
</style>

<script lang="ts">
import ImageUpload from "@/components/ImageUpload.vue";

export default {
  name: "BackgroundUpload",

  components: { ImageUpload },
};
</script>
