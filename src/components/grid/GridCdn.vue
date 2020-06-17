<template>
  <div ref="grid" class="dhx-container--grid"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "GridCdn",
  data: () => ({
    grid: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.grid = new dhx.Grid(this.$refs.grid, {
        columns: [
          { minWidth: 200, id: "country", header: [{ text: "Country" }] },
          { minWidth: 125, id: "population", header: [{ text: "Population" }] },
          {
            minWidth: 125,
            id: "yearlyChange",
            header: [{ text: "Yearly Change" }],
          },
          { minWidth: 125, id: "netChange", header: [{ text: "Net Change" }] },
          {
            minWidth: 125,
            id: "destiny",
            header: [{ text: "Density (P/Km²)" }],
          },
          { minWidth: 125, id: "area", header: [{ text: "Land Area (Km²)" }] },
          {
            minWidth: 125,
            id: "migrants",
            header: [{ text: "Migrants (net)" }],
          },
          { minWidth: 125, id: "fert", header: [{ text: "Fert. Rate" }] },
          { minWidth: 125, id: "age", header: [{ text: "Med. Age" }] },
          { minWidth: 125, id: "urban", header: [{ text: "Urban Pop" }] },
        ],
        adjust: true,
        autoWidth: true,
      });
      this.grid.data.load("https://dhtmlx.github.io/react-widgets/static/grid.json");
    });
  },
  beforeDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  },
};
</script>
