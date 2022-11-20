<template>
  <div class="d-flex justify-space-between">
    <ChannelDropdownVue class="pa-2"/>
    <VideoListIcon class="pa-2"/>
    <StatisticsIcon class="pa-2"/>
    <SettingsIcon class="pa-2"/>
    <AddVideoIcon class="pa-2"/>
    <FilterIcon class="pa-2"/>
  </div>
</template>

<script lang="ts">
import ChannelDropdownVue from "./ChannelDropdown.vue";
import VideoListIcon from "./VideoListIcon.vue";
import StatisticsIcon from "./StatisticsIcon.vue"
import SettingsIcon from "./SettingsIcon.vue";
import AddVideoIcon from "./AddVideoIcon.vue";
import FilterIcon from "./FilterIcon.vue";
import SortIcon from "./SortIcon.vue";

export default {
  name: "Header",

  components: { ChannelDropdownVue, VideoListIcon, StatisticsIcon, SettingsIcon , AddVideoIcon, FilterIcon, SortIcon},

  props: {},
};
</script>
