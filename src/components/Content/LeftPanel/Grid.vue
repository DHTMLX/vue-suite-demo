<template>
  <div class="container">

    <div ref="gNode" class="grid_container"></div>
    <div ref="pNode"></div>
  </div>
</template>

<script>
import { Grid, Pagination } from "@dhx/trial-suite";
import store from "../../../store.js";

export default {
  data() {
    return {
      gNode: null,
      pNode: null,
      grid: null,
      paginator: null
    };
  },
  mounted() {
    const gridConfig = {
      columns: [
        {
          gravity: 2,
          id: "time",
          header: [{ text: "Time", align: "center" }],
          type: "date",
          format: "%M %d, %H:%i",
        },
        { id: "nights", header: [{ text: "Nights" }] },
        {
          id: "price",
          header: [{ text: "Price" }],
          type: "number",
          format: "# #",
          template: (i) => `$ ${i}`,
        },
        {
          gravity: 3,
          id: "contactPerson",
          header: [{ text: "Contact Person" }],
        },
        {
          gravity: 4,
          id: "contactEmail",
          header: [{ text: "Contact Email" }],
          htmlEnable: true,
          template: (text) => {
            return `<span class="contact_email";>${text}</span>`;
          },
        },
        {
          gravity: 2,
          id: "totalCost",
          header: [{ text: "Total Cost" }],
          type: "number",
          format: "# #",
          template: (i) => `$${i}`,
        },
      ],
      autoWidth: true,
      css: "grid",
      multiselection: true,
      selection: "complex",
      editable: true,
    }

    this.grid = new Grid(this.$refs.gNode, gridConfig);
    this.paginator = new Pagination(this.$refs.pNode, {
      pageSize: 20,
      data: this.grid.data,
    });
    this.grid.data.parse(store.gridDataset);
  },
  beforeDestroy() {
    this.grid?.destructor();
    this.paginator?.destructor();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border: var(--dhx-border);
}

.grid_container {
  min-height: 848px;
  width: 798px;
  
}
</style>
