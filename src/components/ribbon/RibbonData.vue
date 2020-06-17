<template>
  <div>
    <div class="dhx-container--button">
      <button @click="handleAddClick()" class="custom-button">
        disable/enable print button
      </button>
    </div>
    <div ref="ribbon"></div>
  </div>
</template>

<script>
import { Ribbon as RibbonDHX, TreeCollection } from "dhx-suite";
import "@mdi/font/css/materialdesignicons.min.css";
export default {
  name: "RibbonData",
  data: () => ({
    data: new TreeCollection(),
    ribbon: null,
    disabled: false,
  }),
  methods: {
    handleAddClick() {
      this.data.update("print", {
        disabled: !this.data.getItem("print").disabled,
      });
    },
  },
  mounted() {
    this.ribbon = new RibbonDHX(this.$refs.ribbon, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/ribbon.json");
  },
  beforeDestroy() {
    if (this.ribbon) {
      this.ribbon.destructor();
    }
  },
};
</script>
