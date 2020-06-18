<template>
  <section>
    <div class="dhx-container--button">
      <button @click="handleClick()" class="custom-button">
        disable/enable edit button
      </button>
    </div>
    <div ref="menu" class="dhx-container--menu"></div>
  </section>
</template>

<script>
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
export default {
  name: "MenuData",
  data: () => ({
    data: new TreeCollection(),
    disabled: false,
    menu: null,
  }),
  methods: {
    handleClick() {
      this.data.update("edit", {
        disabled: !this.data.getItem("edit").disabled,
      });
    },
  },
  mounted() {
    this.menu = new MenuDHX(this.$refs.menu, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/menu.json");
  },
  beforeDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  },
};
</script>
