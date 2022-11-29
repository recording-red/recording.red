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
  background-color: orange;
}

.background-text {
  max-width: 15vw;
  text-align: center;
  font-weight: bold;
  background-color: red;
}
</style>

<script lang="ts">
export default {
  name: "Background",
};
</script>
