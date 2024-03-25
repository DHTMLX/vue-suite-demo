<template>
  <div ref="node" class="tickets-container"></div>
</template>

<script>
import { DataView } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css";
import store from "../../../store.js";

export default {
  data() {
    return {
      node: null,
      dataview: null
    };
  },
  methods: {
    template({ title, text, type, avatar, name, comments, time }) {
      return `
          <div class="dhx_dataview_template_a">
            <div class="dhx_dataview_template_a__head">
              <div class="dhx_dataview_template_a__type dhx_dataview_template_a__type--${type}">${type}</div>
              <div class="dhx_dataview_template_a__content">
                <div class="dhx_dataview_template_a__title">${title}</div>
                <div class="dhx_dataview_template_a__comment">${text}</div>
              </div>
            </div>
            <div class="dhx_dataview_template_a__body">
              <div class="dhx_dataview_template_a__person">
                <div class="dhx_dataview_template_a__avatar" style="background-image: url(${avatar})"></div>
                <div class="dhx_dataview_template_a__info">
                  <div class="dhx_dataview_template_a__time">${time}</div>
                  <div class="dhx_dataview_template_a__name">${name}</div>
                </div>
              </div>
              <div class="dhx_dataview_template_a__comments">${comments}
              <span class="mdi mdi-comment-outline"></span></div>
            </div>
          </div>
        `;
    }
  },
  mounted() {
    this.dataview = new DataView(this.$refs.node, {
      template: this.template,
      itemsInRow: 2,
      css: "dhx_dataview_template_a_box",
    });
    this.dataview.data.parse(store.ticketsDataviewData);
  },
  beforeDestroy() {
    this.dataview?.destructor();
  }
};
</script>

<style>
.tickets-container {
  background: var(--dhx-background-primary);
}
</style>