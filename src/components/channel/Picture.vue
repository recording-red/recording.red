<template>
  <div class="channel-picture">
    <div class="channel-picture-text">
      Cliquez dans cette zone pour ajouter la photo de votre chaine.
    </div>
    <div class="channel-picture-circle" />
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";

.channel-picture {
  display: flex;
  justify-content: center;
  align-items: center;
}

.channel-picture-text {
  max-width: 10vw;
  text-align: center;
  font-weight: bold;
}

.channel-picture-circle {
  position: absolute;
  top: $navbar-height + 1.75em;
  height: 16em;
  width: 16em;
  border-radius: 50%;
  display: inline-block;
  border: 0.25em solid $color-white;
}
</style>

<script lang="ts">
export default {
  name: "Picture",
};
</script>
