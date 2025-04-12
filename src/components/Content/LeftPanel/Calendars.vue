<script>
import { Calendar, Timepicker } from "@dhx/trial-suite";

export default {
  mounted() {
    this.week_calendar = new Calendar(this.$refs.week_container, {
      weekStart: "monday",
      timePicker: true,
      range: true,
      value: [new Date(), new Date(Date.now() + 200000000)]
    });

    this.timepicker = new Timepicker(this.$refs.timepicker_container, {
      controls: true,
      value: new Date()
    });

    this.year_calendar = new Calendar(this.$refs.year_container, {
      timePicker: true,
      mode: "year",
      value: new Date()
    });
  },

  unmounted() {
    this.week_calendar?.destructor();
    this.timepicker?.destructor();
    this.year_calendar?.destructor();
  }
};
</script>

<template>
  <div class="calendars-wrapper">
    <div ref="week_container" class="container dhx_layout_calendar_cell"></div>
    <div ref="timepicker_container" class="container dhx_layout_calendar_cell"></div>
    <div ref="year_container" class="container dhx_layout_calendar_cell"></div>
  </div>
</template>
