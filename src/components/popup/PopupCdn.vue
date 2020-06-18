<template>
  <div>
    <div ref="popup"></div>
    <button @click="popupShow()" class="custom-button">Show Popup</button>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "PopupCdn",
  data: () => ({
    popup: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.popup = new dhx.Popup({
        css: "dhx_widget--bordered",
      });
      this.popup.attachHTML("<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-vue popup sample</div>");
    });
  },
  methods: {
    popupShow() {
      this.popup.show(this.$refs.popup, {
        mode: "bottom",
        indent: 50,
      });
    },
  },
  beforeDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  },
};
</script>
