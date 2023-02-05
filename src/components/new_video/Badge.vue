<template>
  <div v-if="selected" class="badge on">
    <img :src="iconSelected" />{{ value }}
  </div>
  <div v-else class="badge off"><img :src="iconNotSelected" />{{ value }}</div>
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.badge {
  display: inline-block;
  padding: 3px 15px 1px 15px;
  border-radius: 11px;
  text-transform: uppercase;
}

.on {
  background-color: $color-dark-grey;
  color: $color-white;
}

.off {
  background-color: $color-medium-grey;
  color: $color-dark-grey;
}

img {
  max-height: 15px;
  margin-right: 5px;
}
</style>

<script lang="ts">
export default {
  name: "Badge",

  props: {
    iconSelected: String,
    iconNotSelected: String,
    value: String,
    selected: Boolean,
  },
};
</script>
