<template>
  <div class="video-container">
    <div class="file-container" v-if="fileUrl === ''" @click="uploadFile()">
      Cliquez ici pour uploader votre vidéo
    </div>
    <video class="img" v-else :src="fileUrl" controls />
    <input type="file" ref="file" v-on:change="onChange" hidden />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.video-container {
  display: flex;
  flex-direction: column;
}
.file-container {
  height: 20em;
  background-color: $color-medium-grey;
  text-align: center;
  vertical-align: middle;
}

.img {
  height: 20em;
  object-fit: scale-down;
  background-color: $color-medium-grey;
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

    async onChange() {
      const files = this.$refs.file.files;
      if (files != null) {
        this.fileUrl = URL.createObjectURL(files[0]);

        let fr = new FileReader();
        fr.readAsBinaryString(files[0]);
        const response = await fetch(
          import.meta.env.VITE_RECRED_URL + "/video/upload/",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: fr.result,
          }
        );
      }
    },
  },
};
</script>
