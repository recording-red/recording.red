<template>
  <div class="header">
    <div class="header-item">
      <ChannelDropdown />
      <VideoListIcon class="header-icon" />
      <StatisticsIcon class="header-icon" />
      <SettingsIcon class="header-icon" />
    </div>
    <div class="header-item">
      <AddVideoIcon class="header-icon" />
      <FilterIcon class="header-icon" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.header-item {
  display: inline-block;
}

.header-icon {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  margin: 0px 10px 0px 10px;
}
</style>

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
