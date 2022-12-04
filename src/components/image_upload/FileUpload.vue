<template>
  <div
    class="file-container"
    v-if="item.imageUrl === null"
    @click="uploadFile()"
  />
  <img class="img" v-if="item.imageUrl" :src="item.imageUrl" />
  <input ref="file" type="file" @change="onChange" hidden />
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

    onChange(e: { target: { files: any[]; }; }): void {
      const file = e.target.files[0];
      this.image = file;
      this.item.imageUrl = URL.createObjectURL(file);
    },
  },
};
</script>
