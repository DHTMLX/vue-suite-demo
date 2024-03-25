<template>
  <div ref="node" class="container"></div>
</template>

<script>
import { Chart } from "@dhx/trial-suite";
import store from "../../../store.js";

export default {
  data() {
    return {
      node: null,
      chart: null
    };
  },
  mounted() {
    this.chart = new Chart(this.$refs.node, {
      type: "pie",
      series: [
        {
          value: "value",
          // monochrome: "#0288D1",
          color: "color",
          opacity: "opacity",
          text: "month",
          stroke: "var(--dhx-background-primary)",
          strokeWidth: 0,
        },
      ],
      legend: {
        values: {
          id: "value",
          text: "id",
          color: "color",
        },
        // monochrome: "#0288D1",
        align: "right",
        valign: "middle",
        width: 30,
      },
    });
    this.chart.data.parse(store.chartData);
  },

  beforeDestroy() {
    this.chart?.destructor();
  }
};
</script>
