<template>
  <div class="description">
    <div class="description-text">
      Cliquez dans cette zone pour vous presenter, presenter votre chaine, et
      vous adresser a vos auditeurs.
    </div>
  </div>
</template>

<style>
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
}

.description-text {
  max-width: 15vw;
  text-align: center;
  font-weight: bold;
  background-color: red;
}
</style>

<script lang="ts">
export default {
  name: "Description",
};
</script>
