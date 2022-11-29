<template>
  <div class="background">
    <div class="background-text">
      Cliquez dans cette zone pour ajouter un fond d'écran
    </div>
  </div>
</template>

<style lang="scss">
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
export default {
  name: "Background",
};
</script>
