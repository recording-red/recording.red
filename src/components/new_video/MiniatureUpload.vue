<template>
  <div class="background" @click="showModal = true">
    <div class="background-text">Cliquez ici pour upload votre vignette.</div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #body>
        <ImageUpload />
      </template>
    </modal>
  </Teleport>
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.background {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-text {
  max-width: 25vw;
  min-width: 25vw;
  min-height: 25vh;
  max-height: 25vh;
  text-align: center;
  font-weight: bold;
  background-color: $color-medium-grey;
}
</style>

<script lang="ts">
import Modal from "@/components/Modal.vue";
// import BackgroundUpload from "@/components/channel/BackgroundUpload.vue";
import ImageUpload from "@/components/image_upload/ImageUpload.vue";

export default {
  name: "Background",

  components: { Modal, ImageUpload },

  data() {
    return {
      showModal: false,
    };
  },
};
</script>
