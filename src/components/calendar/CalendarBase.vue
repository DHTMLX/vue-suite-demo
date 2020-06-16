<template>
  <div ref="calendar"></div>
</template>

<script>
import { Calendar as CalendarDHX } from "dhx-suite";
export default {
  name: "CalendarBase",
  data: () => ({
    calendar: null
  }),
  mounted() {
    this.calendar = new CalendarDHX(this.$refs.calendar, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
  },
  beforeDestroy() {
		if (this.calendar) {
      this.calendar.destructor();
    }
	}
}
</script>
