<script>
import { Grid, Pagination } from "@dhx/trial-suite";
import { getData } from "../../../data";

export default {
  data() {
    const { gridData } = getData();
    return { gridData };
  },
  mounted() {
    const gridConfig = {
      data: this.gridData,
      columns: [
        {
          gravity: 2,
          id: "time",
          header: [{ text: "Time", align: "center" }],
          type: "date",
          dateFormat: "%M %d, %H:%i"
        },
        { id: "nights", header: [{ text: "Nights" }] },
        {
          id: "price",
          header: [{ text: "Price" }],
          type: "number",
          numberMask: { prefix: "$" }
        },
        {
          gravity: 3,
          id: "contactPerson",
          header: [{ text: "Contact Person" }]
        },
        {
          gravity: 4,
          id: "contactEmail",
          header: [{ text: "Contact Email" }],
          htmlEnable: true,
          template: (text) => {
            return `<span class="contact_email";>${text}</span>`;
          }
        },
        {
          gravity: 2,
          id: "totalCost",
          header: [{ text: "Total Cost" }],
          type: "number",
          numberMask: { prefix: "$" }
        }
      ],
      autoWidth: true,
      css: "grid",
      multiselection: true,
      selection: "complex",
      editable: true
    };

    this.grid = new Grid(this.$refs.grid_container, gridConfig);
    this.pagination = new Pagination(this.$refs.pagination_container, {
      pageSize: 20,
      data: this.grid.data
    });
  },

  unmounted() {
    this.grid?.destructor();
    this.pagination?.destructor();
  }
};
</script>

<template>
  <div class="grid-block">
    <div ref="grid_container" class="grid_container"></div>
    <div ref="pagination_container"></div>
  </div>
</template>
