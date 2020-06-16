<template>
  <div class="component-wrapper">
    <div ref="form"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">No events yet</div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{event.name}}</p>
        <p>{{event.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Form as FormDHX } from 'dhx-suite';
export default {
  name: "FormEvents",
  data: () => ({
    events: [],
    form: null
  }),
  mounted() {
    this.form = new FormDHX(this.$refs.form, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      gravity: false,
      width: 400,
      rows: [
        {
          type: "input",
          label: "Name",
          icon: "dxi-magnify",
          placeholder: "John Doe",
          required: true,
          id: "name",
          name: "name"
        },
        {
          type: "datepicker",
          label: "Date",
          required: true,
          id: "date",
          name: "date"
        },
        {
          type: "timepicker",
          controls: "true",
          label: "Time",
          required: true,
          id: "time",
          name: "time"
        },
        {
          type: "simpleVault",
          required: true,
          label: "Files",
          id: "simplevault",
          name: "simplevault"
        },
        {
          type: "button",
          value: "Send",
          size: "medium",
          view: "flat",
          submit: true,
          color: "primary"
        }
      ]
    });

    this.form.events.on("change", (name, newValue) => {
      const info = {name, newValue};
      const keyId = Math.random();
      this.events = [ { keyId, name: "change", value: JSON.stringify(info) } ].concat(this.events);
    });
    this.form.events.on("change", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "change", value: id } ].concat(this.events);
    });
    this.form.events.on("buttonClick", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "buttonClick", value: id } ].concat(this.events);
    });
    this.form.events.on("validationFail", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "validationFail", value: id } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.form) {
      this.form.destructor();
    }
	}
}
</script>
