<template>
  <div class="background" @click="showModal = true">
    <div class="background-text">
      Cliquez dans cette zone pour ajouter un fond d'écran
    </div>
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
  max-width: 15vw;
  text-align: center;
  font-weight: bold;
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
