<template>
  <div class="navigation">
    <button class="bt selected">
      <img class="img" :src="list" />
    </button>
    <button class="bt">
      <img class="img" :src="previous" />
    </button>
    <button class="bt selected">
      <img class="img" :src="next" @click="uploadFile()" />
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

  methods: {
    async uploadFile() {
      import.meta.env.VITE_RECRED_URL + "/video/",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: null,
        };
    },
  },
};
</script>
