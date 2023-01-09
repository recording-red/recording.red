<template>
  <div class="file-container" v-if="fileUrl === ''" @click="uploadFile()" />
  <img class="img" v-else :src="fileUrl" />
  <input type="file" ref="file" v-on:change="onChange" hidden />
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.file-container {
  height: 20em;
  background-color: $color-dark-grey;
}

.img {
  height: 20em;
  object-fit: scale-down;
  background-color: $color-dark-grey;
}
</style>

<script lang="ts">
export default {
  name: "FileUpload",

  data() {
    return {
      fileUrl: "",
      $refs: {
        file: HTMLInputElement.prototype,
      },
    };
  },
  methods: {
    uploadFile(): void {
      this.$refs.file.click();
    },

    onChange(): void {
      const files = this.$refs.file.files;
      if (files != null) {
        this.fileUrl = URL.createObjectURL(files[0]);
      }
    },
  },
};
</script>
