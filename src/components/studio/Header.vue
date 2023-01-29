<template>
  <div class="header">
    <ChannelDropdown />
    <VideoListIcon />
    <StatisticsIcon />
    <SettingsIcon />
    <AddVideoIcon />
    <FilterIcon />
  </div>
</template>

<script lang="ts">
import ChannelDropdown from "@/components/studio/ChannelDropdown.vue";
import VideoListIcon from "@/components/studio/VideoListIcon.vue";
import StatisticsIcon from "@/components/studio/StatisticsIcon.vue";
import SettingsIcon from "@/components/studio/SettingsIcon.vue";
import AddVideoIcon from "@/components/studio/AddVideoIcon.vue";
import FilterIcon from "@/components/studio/FilterIcon.vue";
import SortIcon from "@/components/studio/SortIcon.vue";

export default {
  name: "Header",

  components: {
    ChannelDropdown,
    VideoListIcon,
    StatisticsIcon,
    SettingsIcon,
    AddVideoIcon,
    FilterIcon,
    SortIcon,
  },
};
</script>
