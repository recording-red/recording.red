<template>
  <input v-model="title" />
  <VideoUpload />
  <br />
  <div class="badge">
    <Badge value="UPLOAD" />
    <Badge value="INFORMATION" />
    <Badge value="CATEGORIE" />
    <Badge value="MISE EN LIGNE" />
  </div>
  <div>
    
  </div>
</template>

<style lang="scss" scoped>
.add {
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  font-size: x-large;
}

input {
  border-width: 0px;
  min-width: 550px;
  width: 550px;
  max-width: 550px;
  font-size: x-large;
}

.badge {
  margin-right: 10px;
}
</style>

<script lang="ts">
import VideoUpload from "@/components/new_video/VideoUpload.vue";
import Badge from "@/components/Badge.vue";

export default {
  name: "VideoBreadcrumb",

  components: { VideoUpload, Badge },

  data() {
    return {
      title: "Cliquez ici pour écrire le titre de votre vidéo",
    };
  },
};
</script>
