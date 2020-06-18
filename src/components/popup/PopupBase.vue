<template>
  <div>
    <div ref="popup"></div>
    <button @click="popupShow()" class="custom-button">
      Show Popup
    </button>
  </div>
</template>

<script>
import { Popup as PopupDHX } from "dhx-suite";
export default {
  name: "PopupBase",
  data: () => ({
    popup: null,
  }),
  mounted() {
    this.popup = new PopupDHX({
      css: "dhx_widget--bordered",
    });
    this.popup.attachHTML("<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-vue popup sample</div>");
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
