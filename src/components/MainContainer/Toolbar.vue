<script>
import { Toolbar, setTheme } from "@dhx/trial-suite";
import { getData } from "../../data";

export default {
  data() {
    const { toolbarData } = getData();
    return {
      toolbarData,
      contrast: false,
      theme: "light"
    };
  },
  
  mounted() {
    this.toolbar = new Toolbar(this.$refs.toolbar_container, {
      data: this.toolbarData
    });

    this.toolbar.events.on("click", (id) => {
      switch (id) {
        case "theme": {
          const checked = !this.toolbar.data.getItem("theme").checked;
          this.toolbar.data.update("theme", {
            checked,
            icon: `mdi mdi-${
              !checked ? "weather-night" : "white-balance-sunny"
            }`
          });
          this.theme = checked ? "dark" : "light";
          setTheme(`${this.contrast ? "contrast-" : ""}${this.theme}`);
          break;
        }
        case "contrast": {
          this.contrast = !this.contrast;
          setTheme(`${this.contrast ? "contrast-" : ""}${this.theme}`);
        }
      }
    });
  },

  unmounted() {
    this.toolbar?.destructor();
  }
};
</script>

<template>
  <div ref="toolbar_container"></div>
</template>
