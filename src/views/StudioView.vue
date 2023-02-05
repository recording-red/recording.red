<template>
  <div class="studio">
    <Studio />
    <div class="add">
      <bold
        >Pour ajouter une vidéo, cliquez sur
        <a class="button-plus" href="/video/new">➕</a></bold
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.studio {
  padding: 3em 15em 3em 15em;
}

.add {
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  font-size: x-large;
}

.button-plus {
  border-width: 0px;
  background-color: white;
}

a:link,
a:visited {
  text-decoration: none;
}
</style>

<script lang="ts">
import Studio from "@/components/studio/Studio.vue";

export default {
  name: "StudioView",

  components: { Studio },
};
</script>
