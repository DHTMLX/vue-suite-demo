<template>
  <div class="component-wrapper">
    <div ref="form"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">
        No events yet
      </div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{ event.name }}</p>
        <p>{{ event.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Form as FormDHX } from "dhx-suite";
export default {
  name: "FormEvents",
  data: () => ({
    events: [],
    form: null,
  }),
  mounted() {
    this.form = new FormDHX(this.$refs.form, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      width: 400,
      rows: [
        {
          type: "input",
          label: "Name",
          icon: "dxi-magnify",
          placeholder: "John Doe",
          required: true,
          name: "name",
        },
        {
          type: "datepicker",
          label: "Date",
          required: true,
          name: "date",
        },
        {
          type: "timepicker",
          controls: "true",
          label: "Time",
          required: true,
          name: "time",
        },
        {
          type: "simpleVault",
          required: true,
          label: "Files",
          name: "simplevault",
        },
        {
          type: "button",
          text: "Send",
          size: "medium",
          view: "flat",
          submit: true,
          color: "primary",
        },
      ],
    });

    this.form.events.on("change", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "change", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("click", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "buttonClick", value: id }].concat(this.events);
    });
    this.form.events.on("beforeHide", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeHide", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("afterHide", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterHide", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("beforeShow", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeShow", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("afterShow", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterShow", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("beforeValidate", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeValidate", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("afterValidate", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterValidate", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("beforeChangeProperties", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeChangeProperties", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("afterChangeProperties", (name, value) => {
      const info = { name, value };
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterChangeProperties", value: JSON.stringify(info) }].concat(this.events);
    });
    this.form.events.on("afterSend", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterSend", value: "" }].concat(this.events);
    });
    this.form.events.on("beforeSend", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeSend", value: "" }].concat(this.events);
    });
    this.form.events.on("blur", (name, value) => {
      const info = JSON.stringify({ value, name });
      const keyId = Math.random();
      this.events = [{ keyId, name: "blur", value: info }].concat(this.events);
    });
    this.form.events.on("focus", (name, value) => {
      const info = JSON.stringify({ value, name });
      const keyId = Math.random();
      this.events = [{ keyId, name: "focus", value: info }].concat(this.events);
    });
    this.form.events.on("keydown", (event, id) => {
      const value = JSON.stringify({event, id});
      const keyId = Math.random();
      this.events = [{ keyId, name: "keydown", value }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  },
};
</script>
