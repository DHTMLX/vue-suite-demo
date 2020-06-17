<template>
  <div ref="calendar"></div>
</template>

<script>
import { Calendar as CalendarDHX } from "dhx-suite";
export default {
  name: "CalendarConfigurated",
  data: () => ({
    calendar: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.calendar = new CalendarDHX(this.$refs.calendar, {
      ...this.options,
    });
  },
  beforeDestroy() {
    if (this.calendar) {
      this.calendar.destructor();
    }
  },
};
</script>
