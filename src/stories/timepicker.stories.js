import TimepickerBase from "../components/timepicker/TimepickerBase";
import TimepickerConfigurated from "../components/timepicker/TimepickerConfigurated";
import TimepickerCdn from "../components/timepicker/TimepickerCdn";
import TimepickerEvents from "../components/timepicker/TimepickerEvents";

export default {
  title: "Timepicker",
};

export const base = () => ({
  components: { TimepickerBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/timepicker/TimepickerBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <TimepickerBase></TimepickerBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { TimepickerConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered",
      controls: true,
      timeFormat: 12,
      value: new Date,
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/timepicker/TimepickerConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <TimepickerConfigurated :options="options"></TimepickerConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { TimepickerCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/timepicker/TimepickerCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <TimepickerCdn></TimepickerCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { TimepickerEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/timepicker/TimepickerEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <TimepickerEvents></TimepickerEvents>
    </section>
  `,
});
