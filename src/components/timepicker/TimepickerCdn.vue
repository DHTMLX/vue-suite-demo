<template>
  <div ref="timepicker"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "TimepickerCdn",
  data: () => ({
    timepicker: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.timepicker = new dhx.Timepicker(this.$refs.timepicker, {
        css: "dhx_widget--bordered",
      });
    });
  },
  beforeDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  },
};
</script>
