<template>
  <div ref="node" class="container"></div>
</template>

<script>
import { Chart, Layout } from "@dhx/trial-suite";
import store from "../../../store.js";

export default {
  data() {
    return {
      node: null,
      accordion: null,
      chart: null
    };
  },
  mounted() {
    this.accordion = new Layout(this.$refs.node, {
      type: "line",
      rows: [
        {
          header: "HOTELS",
          height: "500px",
          padding: 40,
          id: "chart",
          collapsable: true,
        }
      ],
    });
    this.chart = new Chart(null, {
      type: "bar",
      scales: {
        bottom: {
          text: "month",
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0,
        },
      },
      series: [
        {
          id: "A",
          value: "Won deals",
          color: "none",
          fill: "var(--dhx-color-primary)",
          showText: true,
          showTextTemplate: (sum) => `$${sum}`,
        },
        {
          id: "B",
          value: "Lost deals",
          color: "none",
          fill: "var(--dhx-color-primary-light-active)",
          showText: true,
          showTextTemplate: (sum) => `$${sum}`,
        },
        {
          id: "all",
          value: "All deals",
          color: "none",
          fill: "var(--dhx-color-primary-disabled)",
          type: "area",
          strokeWidth: 0,
        },
      ],
      legend: {
        series: ["A", "B", "all"],
        halign: "right",
        valign: "top",
        itemPadding: 20,
        margin: 40,
      },
    });
    this.accordion.getCell("chart").attach(this.chart);
    this.chart.data.parse(store.hotelsData)
  },
  beforeDestroy() {
    this.accordion?.destructor();
    this.chart?.destructor();
  }
};
</script>