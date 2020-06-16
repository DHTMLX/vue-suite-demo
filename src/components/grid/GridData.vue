<template>
  <section>
    <div class="dhx-container--button">
      <button @click="handleClick('reset')" class="custom-button">Reset</button>
      <button @click="handleClick('remove')" class="custom-button">Remove first item</button>
    </div>
    <div ref="grid" class="dhx-container--grid"></div>
  </section>
</template>

<script>
import { Grid as GridDHX, DataCollection } from "dhx-suite";
export default {
  name: "ChartData",
  data: () => ({
    data: new DataCollection(),
    grid: null
  }),
  methods: {
    handleClick(action) {
      if (action === "reset") {
        this.data.removeAll();
        this.data.load("https://dhtmlx.github.io/react-widgets/static/grid.json");
      } else if (action === "remove") {
        this.data.remove(this.data.getId(0));
      }
    }
  },
  mounted() {
    this.grid = new GridDHX(this.$refs.grid, {
      columns: [
        {minWidth: 200, id: "country", header: [{text: "Country"}]},
        {minWidth: 125, id: "population", header: [{text: "Population"}]},
        {minWidth: 125, id: "yearlyChange", header: [{text: "Yearly Change"}]},
        {minWidth: 125, id: "netChange", header: [{text: "Net Change"}]},
        {minWidth: 125, id: "destiny", header: [{text: "Density (P/Km²)"}]},
        {minWidth: 125, id: "area", header: [{text: "Land Area (Km²)"}]},
        {minWidth: 125, id: "migrants", header: [{text: "Migrants (net)"}]},
        {minWidth: 125, id: "fert", header: [{text: "Fert. Rate"}]},
        {minWidth: 125, id: "age", header: [{text: "Med. Age"}]},
        {minWidth: 125, id: "urban", header: [{text: "Urban Pop"}]},
      ],
      adjust: true,
      autoWidth: true,
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/grid.json");
  },
  beforeDestroy() {
		if (this.grid) {
      this.grid.destructor();
    }
	}
}
</script>
