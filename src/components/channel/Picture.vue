<template>
  <div class="picture">
    <div class="text">
      Cliquez dans cette zone pour ajouter la photo de votre chaine.
    </div>
  </div>
</template>

<style>
* {
  margin: 0 auto;
}
.picture {
  display: inline-block;
  border-radius: 50%;
  border: 0.4em solid white;
  text-align: center;
  vertical-align: middle;
  line-height: 35vh; /* The same as your div height */
}

.text {
  height: 35vh;
  width: 35vh;
  border-radius: 50%;
  text-align: center;
  text-align: left;
  font-weight: bold;
}
</style>

<script lang="ts">
export default {
  name: "Picture",
};
</script>
