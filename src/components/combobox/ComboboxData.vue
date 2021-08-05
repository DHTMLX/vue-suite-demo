<template>
  <section class="dhx-container-widget">
    <div class="dhx-container--button">
      <button @click="handleClick()" class="custom-button">
        Select first item
      </button>
    </div>
    <div ref="combobox" style="width: 400px;"></div>
  </section>
</template>

<script>
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";
export default {
  name: "ComboboxData",
  data: () => ({
    data: new DataCollection(),
    combobox: null,
  }),
  methods: {
    handleClick() {
      this.combobox.setValue(this.data.getId(0));
    },
  },
  mounted() {
    this.combobox = new ComboboxDHX(this.$refs.combobox, {
      placeholder: "Click to choose",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");
  },
  beforeDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  },
};
</script>
