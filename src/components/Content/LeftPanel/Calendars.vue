<template>
  <div class="calendars-wrapper">

    <div ref="weekNode" class="container dhx_layout_calendar_cell"></div>
    <div ref="timepickerNode" class="container dhx_layout_calendar_cell"></div>
    <div ref="yearNode" class="container dhx_layout_calendar_cell"></div>
  </div>
</template>

<script>
import { Calendar, Timepicker } from "@dhx/trial-suite";

export default {
  data() {
    return {
      weekNode: null,
      timepickerNode: null,
      yearNode: null,
      week: null,
      timePicker: null,
      year: null
    };
  },
  mounted() {
    this.week = new Calendar(this.$refs.weekNode, {
      weekStart: "monday",
      timePicker: true,
      range: true,
      value: [new Date(), new Date(Date.now() + 200000000)],
    });
    this.timePicker = new Timepicker(this.$refs.timepickerNode, {
      controls: true,
      value: new Date(),
    });
    this.year = new Calendar(this.$refs.yearNode, {
      timePicker: true,
      mode: "year",
      value: new Date(),
    });
  },
  beforeDestroy() {
    if (this.week) {
      this.week.destructor();
    }
    if (this.timePicker) {
      this.timePicker.destructor();
    }
    if (this.year) {
      this.year.destructor();
    }
  }
};
</script>

<style scoped>
.calendars-wrapper {
  display: flex;
  height: fit-content;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
}
</style>
