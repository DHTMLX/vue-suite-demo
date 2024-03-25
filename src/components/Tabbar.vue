<template>
  <div ref="node"></div>
</template>

<script>
  import { Tabbar } from "@dhx/trial-suite";

  export default {
    data() {
      return {
        node: null,
        tabbar: null
      };
    },
    mounted() {
      this.tabbar = new Tabbar(this.$refs.node, {
        tabAlign: "center",
        disabled: ["reports", "tickets", "users", "applications"],
        views: [
          { id: "dashboard", tab: "Dashboard" },
          { id: "reports", tab: "Reports" },
          { id: "tickets", tab: "Tickets" },
          { id: "users", tab: "Users" },
          { id: "applications", tab: "Applications" },
        ],
      });
    },
    beforeDestroy() {
      if (this.tabbar) {
        this.tabbar.destructor();
      }
    }
  };
</script>