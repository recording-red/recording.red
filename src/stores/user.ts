import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    email: "remi.petitjean@recording.red",
    handle: "Remi",
    channel: "",
  }),
  getters: {},
  actions: {
    setChannel(channel: string) {
      this.channel = channel;
    },
  },
});
