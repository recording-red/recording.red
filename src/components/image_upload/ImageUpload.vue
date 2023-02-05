<template>
  <div class="image-upload">
    <h1>Vignette</h1>

    <FileUpload />

    <div>ZOOM</div>
  </div>
</template>

<style lang="scss" scoped>
.image-upload {
  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
import FileUpload from "@/components/image_upload/FileUpload.vue";

export default {
  name: "ImageUpload",

  components: { FileUpload },
};
</script>
