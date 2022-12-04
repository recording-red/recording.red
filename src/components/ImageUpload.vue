<template>
  <div class="container" @click="uploadFile()">
    <input ref="file" type="file" hidden @change="onChange" />
    <img class="preview-img" v-if="item.imageUrl" :src="item.imageUrl" />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.container {
  height: 100%;
  width: 100%;
  vertical-align: top;
  background-color: $color-dark-grey;
}

.preview-img {
  object-fit: cover;
}
</style>

<script lang="ts">
export default {
  name: "ImageUpload",

  data() {
    return {
      item: {
        //...
        image: null,
        imageUrl: null,
      },
    };
  },
  methods: {
    uploadFile(): void {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },

    onChange(e): void {
      const file = e.target.files[0];
      this.image = file;
      this.item.imageUrl = URL.createObjectURL(file);
    },
  },
};
</script>
