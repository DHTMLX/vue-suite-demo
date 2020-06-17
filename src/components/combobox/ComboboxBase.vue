<template>
  <div ref="combobox" style="width: 400px;"></div>
</template>

<script>
import { Combobox as ComboboxDHX } from "dhx-suite";
export default {
  name: "ComboboxBase",
  data: () => ({
    combobox: null,
  }),
  mounted() {
    this.combobox = new ComboboxDHX(this.$refs.combobox, {
      placeholder: "Click to choose",
    });

    this.combobox.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");
  },
  beforeDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  },
};
</script>
