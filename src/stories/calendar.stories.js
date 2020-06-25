import CalendarBase from "../components/calendar/CalendarBase";
import CalendarConfigurated from "../components/calendar/CalendarConfigurated";
import CalendarCdn from "../components/calendar/CalendarCdn";
import CalendarEvents from "../components/calendar/CalendarEvents";

export default {
  title: "Calendar",
};

export const base = () => ({
  components: { CalendarBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/calendar/CalendarBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <CalendarBase></CalendarBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { CalendarConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered",
      value: new Date(),
      weekNumbers: true,
      timePicker: true,
      timeFormat: 12,
      thisMonthOnly: true,
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/calendar/CalendarConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <CalendarConfigurated :options="options"></CalendarConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { CalendarCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/calendar/CalendarCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <CalendarCdn></CalendarCdn>
    </section>
  `,
});

export const events = () => ({
  components: { CalendarEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/calendar/CalendarEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <CalendarEvents></CalendarEvents>
    </section>
  `,
});
