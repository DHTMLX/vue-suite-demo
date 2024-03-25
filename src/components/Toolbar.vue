<template>
  <div ref="node"></div>
</template>

<script>
  import { Toolbar,setTheme } from "@dhx/trial-suite";
  import store from "../store.js";

  export default {
    data() {
      return {
        node: null,
        toolbar: null,
        contrast: false,
        theme: "light"
      };
    },
    mounted() {
      this.toolbar = new Toolbar(this.$refs.node, {});
      this.toolbar.events.on("click", (id) => {
        switch (id) {
          case "theme": {
            const checked = !this.toolbar.data.getItem("theme").checked;
            this.toolbar.data.update("theme", {
              checked,
              icon: `mdi mdi-${
                !checked ? "weather-night" : "white-balance-sunny"
              }`,
            });
            this.theme = checked ? "dark" : "light";
            setTheme(`${this.contrast ? "contrast-" : ""}${this.theme}`)
            break;
          }
          case "contrast": {
            this.contrast = !this.contrast;
            setTheme(`${this.contrast ? "contrast-" : ""}${this.theme}`)
          }
        }
      });
      this.toolbar.data.parse(store.toolbarData);
    },
    beforeDestroy() {
      if (this.toolbar) {
        this.toolbar.destructor();
      }
    }
  };
</script>