<template>
  <!-- <div class="description">
    <div class="description-box">
      <div class="description-text">
      </div>
    </div>
  </div> -->
  <div class="channel-header-description">
    <div class="channel-header-description-box">
      <div class="channel-header-description-text">
        Cliquez dans cette zone pour vous presenter, presenter votre chaine, et
        vous adresser a vos auditeurs.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";

.channel-header-description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.channel-header-description-box {
  display: flex;
  justify-content: center;
  background-color: $color-dark-grey;
  align-items: center;
  min-height: 15em;
  max-height: 15em;
  min-width: 15em;
  max-width: 15em;
}

.channel-header-description-text {
  color: $color-white;
  text-align: center;
}

// .description {
//   background-color: $color-dark-grey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .description-text {
//   text-align: center;
//   font-weight: bold;
//   min-width: 15vw;
//   max-width: 15vw;
//   min-height: 15vh;
//   max-height: 15vh;
// }
</style>

<script lang="ts">
export default {
  name: "Description",
};
</script>
