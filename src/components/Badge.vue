<template>
  <div v-if="selected" class="badge on" v-on:click="select">
    {{ value }}
  </div>
  <div v-else class="badge off" v-on:click="select">{{ value }}</div>
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.badge {
  display: inline-block;
  padding: 6px 15px 4px 15px;
  border-radius: 5px;
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
</style>

<script lang="ts">
export default {
  name: "Badge",

  props: {
    value: String,
  },

  data() {
    return {
      selected: false,
    };
  },

  methods: {
    select: function (): void {
      this.selected = !this.selected;
    },
  },
};
</script>
