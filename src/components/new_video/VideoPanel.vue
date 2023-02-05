<template>
  <input v-model="title" />
  <VideoUpload />
  <br />
  <div class="badge">
    <Badge
      value="UPLOAD"
      iconSelected="/upload_grey.png"
      iconNotSelected="/upload_black.png"
      selected
    />
    <Badge
      value="INFORMATION"
      iconSelected="/information_grey.png"
      iconNotSelected="/information_black.png"
    />
    <Badge
      value="CATEGORIE"
      iconSelected="/check_grey.png"
      iconNotSelected="/check_black.png"
    />
    <Badge
      value="MISE EN LIGNE"
      iconSelected="/clock_grey.png"
      iconNotSelected="/clock_black.png"
    />
  </div>
  <div class="nav">
    <Navigation />
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

.navigation-item {
  margin-top: 50px;
  background-color: black;
  min-width: 75px;
  max-width: 75px;
  width: 75px;
  min-height: 50px;
  max-height: 50px;
  height: 50px;
}

.navigation-img {
  width: inherit;
  height: inherit;
}

.nav {
  padding-top: 50px;
}
</style>

<script lang="ts">
import VideoUpload from "@/components/new_video/VideoUpload.vue";
import Badge from "@/components/new_video/Badge.vue";
import Navigation from "@/components/new_video/Navigation.vue";

export default {
  name: "VideoBreadcrumb",

  components: { VideoUpload, Badge, Navigation },

  data() {
    return {
      title: "Cliquez ici pour écrire le titre de votre vidéo",
    };
  },
};
</script>
