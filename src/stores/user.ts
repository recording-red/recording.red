import { defineStore } from "pinia";

export const userStore = defineStore("counter", {
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
