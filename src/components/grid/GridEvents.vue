<template>
  <div class="component-wrapper">
    <div ref="grid" class="dhx-container--grid" style="width: 800px;"></div>
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
import { Grid as GridDHX } from "dhx-suite";
export default {
  name: "GridEvents",
  data: () => ({
    events: [],
    grid: null,
  }),
  mounted() {
    this.grid = new GridDHX(this.$refs.grid, {
      columns: [
        {
          minWidth: 200,
          id: "country",
          header: [{ text: "Country" }],
          footer: [{ text: "Country" }],
        },
        {
          minWidth: 125,
          id: "population",
          header: [{ text: "Population" }],
          footer: [{ text: "Population" }],
        },
        {
          minWidth: 125,
          id: "yearlyChange",
          header: [{ text: "Yearly Change" }],
          footer: [{ text: "Yearly Change" }],
        },
        {
          minWidth: 125,
          id: "netChange",
          header: [{ text: "Net Change" }],
          footer: [{ text: "Net Change" }],
        },
        {
          minWidth: 125,
          id: "destiny",
          header: [{ text: "Density (P/Km²)" }],
          footer: [{ text: "Density (P/Km²)" }],
        },
        {
          minWidth: 125,
          id: "area",
          header: [{ text: "Land Area (Km²)" }],
          footer: [{ text: "Land Area (Km²)" }],
        },
        {
          minWidth: 125,
          id: "migrants",
          header: [{ text: "Migrants (net)" }],
          footer: [{ text: "Migrants (net)" }],
        },
        {
          minWidth: 125,
          id: "fert",
          header: [{ text: "Fert. Rate" }],
          footer: [{ text: "Fert. Rate" }],
        },
        {
          minWidth: 125,
          id: "age",
          header: [{ text: "Med. Age" }],
          footer: [{ text: "Med. Age" }],
        },
        {
          minWidth: 125,
          id: "urban",
          header: [{ text: "Urban Pop" }],
          footer: [{ text: "Urban Pop" }],
        },
      ],
      adjust: true,
      selection: true,
      editable: true,
      resizable: true,
    });
    this.grid.data.load("https://dhtmlx.github.io/react-widgets/static/grid.json");

    this.grid.events.on("scroll", position => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "scroll", value: JSON.stringify(position) }].concat(this.events);
    });
    this.grid.events.on("sort", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "sort", value: id }].concat(this.events);
    });
    this.grid.events.on("expand", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "expand", value: id }].concat(this.events);
    });
    this.grid.events.on("filterChange", (value, colId, filter) => {
      const infoFilter = { value, colId, filter };
      const keyId = Math.random();
      this.events = [{ keyId, name: "filterChange", value: JSON.stringify(infoFilter) }].concat(this.events);
    });
    this.grid.events.on("cellClick", (row, column, e) => {
      const infoCellClick = { row, column, event: e };
      const keyId = Math.random();
      this.events = [{ keyId, name: "cellClick", value: JSON.stringify(infoCellClick) }].concat(this.events);
    });
    this.grid.events.on("cellRightClick", (row, column, e) => {
      const infoRightClick = { row, column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "cellRightClick",
          value: JSON.stringify(infoRightClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("cellMouseOver", (row, column, e) => {
      const infoMouseOver = { row, column, event: e };
      const keyId = Math.random();
      this.events = [{ keyId, name: "cellMouseOver", value: JSON.stringify(infoMouseOver) }].concat(this.events);
    });
    this.grid.events.on("cellMouseDown", (row, column, e) => {
      const infoMouseDown = { row, column, event: e };
      const keyId = Math.random();
      this.events = [{ keyId, name: "cellMouseDown", value: JSON.stringify(infoMouseDown) }].concat(this.events);
    });
    this.grid.events.on("cellDblClick", (row, column, e) => {
      const infoDblClick = { row, column, event: e };
      const keyId = Math.random();
      this.events = [{ keyId, name: "cellDblClick", value: JSON.stringify(infoDblClick) }].concat(this.events);
    });
    this.grid.events.on("headerCellClick", (column, e) => {
      const infoHeaderCellClick = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "headerCellClick",
          value: JSON.stringify(infoHeaderCellClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("footerCellClick", (column, e) => {
      const infoFooterCellClick = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "footerCellClick",
          value: JSON.stringify(infoFooterCellClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("headerCellMouseOver", (column, e) => {
      const infoHeaderCellMouseOver = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "headerCellMouseOver",
          value: JSON.stringify(infoHeaderCellMouseOver),
        },
      ].concat(this.events);
    });
    this.grid.events.on("footerCellMouseOver", (column, e) => {
      const infoFooterCellMouseOver = { column, event: e };
      this.logEvent(JSON.stringify(infoFooterCellMouseOver), "footerCellMouseOver");
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "footerCellMouseOver",
          value: JSON.stringify(infoFooterCellMouseOver),
        },
      ].concat(this.events);
    });
    this.grid.events.on("headerCellMouseDown", (column, e) => {
      const infoHeaderCellMouseDown = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "headerCellMouseDown",
          value: JSON.stringify(infoHeaderCellMouseDown),
        },
      ].concat(this.events);
    });
    this.grid.events.on("footerCellMouseDown", (column, e) => {
      const infoFooterCellMouseDown = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "footerCellMouseDown",
          value: JSON.stringify(infoFooterCellMouseDown),
        },
      ].concat(this.events);
    });
    this.grid.events.on("headerCellDblClick", (column, e) => {
      const infoHeaderCellDblClick = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "headerCellDblClick",
          value: JSON.stringify(infoHeaderCellDblClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("footerCellDblClick", (column, e) => {
      const infoFooterCellDblClick = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "footerCellDblClick",
          value: JSON.stringify(infoFooterCellDblClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("headerCellRightClick", (column, e) => {
      const infoHeaderCellRightClick = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "headerCellRightClick",
          value: JSON.stringify(infoHeaderCellRightClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("footerCellRightClick", (column, e) => {
      const infoFooterCellRightClick = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "footerCellRightClick",
          value: JSON.stringify(infoFooterCellRightClick),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeEditStart", (row, col, editorType) => {
      const infoBeforeEditStart = { row, col, editorType };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeEditStart",
          value: JSON.stringify(infoBeforeEditStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterEditStart", (row, col, editorType) => {
      const infoAfterEditStart = { row, col, editorType };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterEditStart",
          value: JSON.stringify(infoAfterEditStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeEditEnd", (value, row, column) => {
      const infoBeforeEditEnd = { value, row, column };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeEditEnd",
          value: JSON.stringify(infoBeforeEditEnd),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterEditEnd", (value, row, column) => {
      const infoAfterEditEnd = { value, row, column };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterEditEnd",
          value: JSON.stringify(infoAfterEditEnd),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeResizeStart", (column, e) => {
      const infoBeforeResizeStart = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeResizeStart",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("resize", (column, e) => {
      const infoResize = { column, event: e };
      const keyId = Math.random();
      this.events = [{ keyId, name: "resize", value: JSON.stringify(infoResize) }].concat(this.events);
    });
    this.grid.events.on("afterResizeEnd", (column, e) => {
      const infoAfterResizeEnd = { column, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterResizeEnd",
          value: JSON.stringify(infoAfterResizeEnd),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeKeyDown", e => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeKeyDown", value: JSON.stringify(e) }].concat(this.events);
    });
    this.grid.events.on("afterKeyDown", e => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterKeyDown", value: JSON.stringify(e) }].concat(this.events);
    });
    this.grid.events.on("beforeRowDrag", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeRowDrag",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragRowStart", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragRowStart",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragRowOut", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragRowOut",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragRowIn", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragRowIn",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("canRowDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "canRowDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("cancelRowDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "cancelRowDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeRowDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeRowDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterRowDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterRowDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterRowDrag", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterRowDrag",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeColumnDrag", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeColumnDrag",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragColumnStart", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragColumnStart",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragColumnOut", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragColumnOut",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragColumnIn", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragColumnIn",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("dragColumnDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "dragColumnDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("cancelColumnDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "cancelColumnDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeColumnDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeColumnDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterColumnDrop", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterColumnDrop",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterColumnDrag", (data, e) => {
      const infoBeforeResizeStart = { data, event: e };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterColumnDrag",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeColumnHide", (column) => {
      const infoBeforeResizeStart = { column };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeColumnHide",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterColumnHide", (column) => {
      const infoBeforeResizeStart = { column };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterColumnHide",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterColumnShow", (column) => {
      const infoBeforeResizeStart = { column };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterColumnShow",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeColumnShow", (column) => {
      const infoBeforeResizeStart = { column };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeColumnShow",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeRowHide", (row) => {
      const infoBeforeResizeStart = { row };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeRowHide",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterRowHide", (row) => {
      const infoBeforeResizeStart = { row };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterRowHide",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeRowShow", (row) => {
      const infoBeforeResizeStart = { row };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeRowShow",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterRowShow", (row) => {
      const infoBeforeResizeStart = { row };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterRowShow",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeUnSelect", (row, col) => {
      const infoBeforeResizeStart = { row, col };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeUnSelect",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterUnSelect", (row, col) => {
      const infoBeforeResizeStart = { row, col };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterUnSelect",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeSelect", (row, col) => {
      const infoBeforeResizeStart = { row, col };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeSelect",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("afterSelect", (row, col) => {
      const infoBeforeResizeStart = { row, col };
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterSelect",
          value: JSON.stringify(infoBeforeResizeStart),
        },
      ].concat(this.events);
    });
    this.grid.events.on("beforeSort", (col, dir) => {
      const value = JSON.stringify({ col, dir });
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "beforeSort",
          value,
        },
      ].concat(this.events);

      return true;
    });
    this.grid.events.on("afterSort", (col, dir) => {
      const value = JSON.stringify({ col, dir });
      const keyId = Math.random();
      this.events = [
        {
          keyId,
          name: "afterSort",
          value,
        },
      ].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  },
};
</script>
