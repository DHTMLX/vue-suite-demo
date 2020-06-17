<template>
  <div class="component-wrapper">
    <div style="width: 600px;">
      <div ref="chart"></div>
    </div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">
        No events yet
      </div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{ event.name }}</p>
        <p>{{ event.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart as ChartDHX } from "dhx-suite";
export default {
  name: "ChartEvents",
  data: () => ({
    events: [],
    chart: null,
  }),
  mounted() {
    this.chart = new ChartDHX(this.$refs.chart, {
      type: "bar",
      resizable: true,
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
          value: "company A",
          color: "#81C4E8",
          fill: "#81C4E8",
        },
        {
          id: "B",
          value: "company B",
          color: "#5E83BA",
          fill: "#5E83BA",
        },
      ],
      legend: {
        series: ["A", "B"],
        halign: "right",
        valign: "top",
      },
    });

    this.chart.data.load("https://dhtmlx.github.io/react-widgets/static/chart.json");

    this.chart.events.on("toggleSeries", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "toggleSeries", value: id }].concat(this.events);
    });
    this.chart.events.on("resize", size => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "resize", value: JSON.stringify(size) }].concat(this.events);
    });
    this.chart.events.on("serieClick", (id, value) => {
      const infoSerieClick = { id, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "serieClick", value: infoSerieClick }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destructor();
    }
  },
};
</script>
