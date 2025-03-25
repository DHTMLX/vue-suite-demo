<script>
import { Tabbar } from "@dhx/trial-suite";

export default {
  mounted() {
    this.tabbar = new Tabbar(this.$refs.tabbar_container, {
      tabAlign: "center",
      disabled: ["reports", "tickets", "users", "applications"],
      views: [
        { id: "dashboard", tab: "Dashboard" },
        { id: "reports", tab: "Reports" },
        { id: "tickets", tab: "Tickets" },
        { id: "users", tab: "Users" },
        { id: "applications", tab: "Applications" }
      ]
    });
  },

  unmounted() {
    this.tabbar?.destructor();
  }
};
</script>

<template>
  <div ref="tabbar_container"></div>
</template>
