<template>
  <div class="navigation">
    <button class="bt selected">
      <img class="img" :src="list" />
    </button>
    <button class="bt">
      <img class="img" :src="previous" />
    </button>
    <button class="bt selected">
      <img class="img" :src="next" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.bt {
  width: fit-content;
  min-width: 75px;
  max-height: 48px;
  padding: 10px 25px 10px 25px;
  font-size: large;
  color: $color-white;
  border-radius: 15px;
  border: 0;
  text-transform: uppercase;
  margin: 0px 5px 0px 5px;
}

.selected {
  background-color: $color-black;
}

.img {
  width: 25px;
  height: 25px;
}

.navigation {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script lang="ts">
import List from "@/assets/nav/list_white.png";
import Next from "@/assets/nav/next.png";
import Previous from "@/assets/nav/previous.png";

export default {
  name: "Navigation",

  data() {
    return {
      list: List,
      next: Next,
      previous: Previous,
    };
  },
};
</script>
