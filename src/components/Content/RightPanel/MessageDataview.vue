<template>
  <div ref="node" ></div>
</template>

<script>
  import { DataView } from "@dhx/trial-suite";
  import store from "../../../store";

  export default {
    data() {
      return {
        node: null,
        dataview: null
      };
    },
    methods: {
      template({ mail, name, avatar, status, delivered }) {
        return `
          <div class="dhx_dataview_template_b">
              <div class="dhx_dataview_template_b__avatar" style="background-image: url(${avatar});">
                  <div class="dhx_dataview_template_b__status dhx_dataview_template_b__status--${status}"></div>
              </div>
              <div class="dhx_dataview_template_b__title">Delivered ${delivered}</div>
              <div class="dhx_dataview_template_b__name">${name}</div>
              <a class="dhx_dataview_template_b__message" target="_blank" href="mailto:${mail}">
                  <span class="dhx_dataview_template_b__message-icon mdi mdi-message-reply-text"></span>
                  <span class="dhx_dataview_template_b__message-label">Message</span>
              </a>
          </div>
        `;
      }
    },
    mounted() {
      this.dataview = new DataView(this.$refs.node, {
        template: this.template,
        itemsInRow: 2,
        css: "dhx_dataview_template_b_box",
      });
      this.dataview.data.parse(store.messageDataviewData);
    },
    beforeDestroy() {
        this.dataview.destructor();
    }
  };
</script>

<style>
  .container {
    flex-grow: 1;
  }
</style>