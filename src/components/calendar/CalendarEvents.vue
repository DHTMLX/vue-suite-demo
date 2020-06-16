<template>
  <div class="component-wrapper">
    <div ref="calendar" class='widget-box-wide'></div>
    <div class="events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">No events yet</div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{event.name}}</p>
        <p>{{event.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar as CalendarDHX } from "dhx-suite";
export default {
  name: "CalendarEvents",
  data: () => ({
    calendarEvents: "",
    events: []
  }),
  mounted() {
    this.calendarEvents = new CalendarDHX(this.$refs.calendar, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });

    this.calendarEvents.events.on("dateMouseOver", (date) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "dateMouseOver", value: date } ].concat(this.events);
    });

    this.calendarEvents.events.on("change", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "change", value: id } ].concat(this.events);
    });

    this.calendarEvents.events.on("modeChange", (mode) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "modeChange", value: mode } ].concat(this.events);
    });

    this.calendarEvents.events.on("beforeChange", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeChange", value: id } ].concat(this.events);
    });

    this.calendarEvents.events.on("cancelClick", () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "cancelClick", value: null } ].concat(this.events);
    });
    this.calendarEvents.events.on("monthSelected", (month) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "monthSelected", value: month } ].concat(this.events);
    });

    this.calendarEvents.events.on("yearSelected", (year) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "yearSelected", value: year } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.calendar) {
      this.calendar.destructor();
    }
	}
}
</script>
