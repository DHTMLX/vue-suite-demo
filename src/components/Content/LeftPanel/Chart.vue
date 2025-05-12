<script>
import { Chart, Layout } from "@dhx/trial-suite";
import { getData } from "../../../data";

export default {
  data() {
    const { seriesData, hotelsData } = getData();
    return { seriesData, hotelsData };
  },

  mounted() {
    this.layout = new Layout(this.$refs.layout_container, {
      type: "line",
      rows: [
        {
          header: "HOTELS",
          height: "500px",
          padding: 40,
          id: "chart",
          collapsable: true
        }
      ]
    });

    this.chart = new Chart(null, {
      data: this.hotelsData,
      type: "bar",
      scales: {
        bottom: {
          text: "month"
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0
        }
      },
      series: this.seriesData,
      legend: {
        series: ["A", "B", "all"],
        halign: "right",
        valign: "top",
        itemPadding: 20,
        margin: 40
      }
    });

    this.layout.getCell("chart").attach(this.chart);
  },

  unmounted() {
    this.layout?.destructor();
    this.chart?.destructor();
  }
};
</script>

<template>
  <div ref="layout_container" class="container"></div>
</template>
