<template>
  <div ref="calendar"></div>
</template>

<script>
import fromCDN from 'from-cdn';
import 'dhx-suite';
export default {
  name: "CalendarCdn",
  data: () => ({
    calendar: null
  }),
  mounted() {
    fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.calendar = new dhx.Calendar(this.$refs.calendar, {
        css: 'dhx_widget--bordered',
        value: new Date(),
      });
    })
  },
  beforeDestroy() {
		if (this.calendar) {
      this.calendar.destructor();
    }
	}
}
</script>
