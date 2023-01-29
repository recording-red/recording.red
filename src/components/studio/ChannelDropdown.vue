<template>
  <select v-model="selectedChannel" @change="selectChannel()">
    <option
      v-for="opt in channelOptions"
      :key="opt.id"
      :label="opt.name"
      :value="opt.name"
      :selected="opt.selected"
    ></option>
  </select>
</template>

<style lang="scss" scoped>
select,
input {
  // padding: 10px;
  font-size: 20px;
  background-color: white;
  border-width: 0px;
}
select.textIndent {
  text-indent: -1.5px;
}
select.paddingOffset {
  padding-left: 2.5px;
}
input.paddingOffset {
  padding-left: 5px;
}
</style>

<script lang="ts">
export default {
  name: "ChannelDropdown",

  data() {
    return {
      channel: 0,
      selectedChannel: "",
      channelOptions: [{ id: -1, name: "", selected: true }],
    };
  },

  async created() {
    await this.fetchChannels();
  },

  methods: {
    selectChannel() {
      this.channelOptions.map((opt) => {
        if (opt.name === this.selectedChannel) {
          this.channel = opt.id;
          return;
        }
      });
    },
    async fetchChannels() {
      const response = await fetch(
        import.meta.env.VITE_RECRED_URL + "/channel/",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
      );
      this.channelOptions = await response.json();
    },
  },
};
</script>
