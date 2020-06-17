import FormBase from "../components/form/FormBase";
import FormConfigurated from "../components/form/FormConfigurated";
import FormCdn from "../components/form/FormCdn";
import FormEvents from "../components/form/FormEvents";

export default {
  title: "Form",
};

export const base = () => ({
  components: { FormBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/form/FormBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <FormBase></FormBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { FormConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      gravity: false,
      padding: 20,
      title: "DHX Form",
      width: 400,
      rows: [
        {
          type: "datepicker",
          label: "Date",
          required: true,
          id: "date",
          name: "date",
        },
        {
          type: "timepicker",
          controls: "true",
          label: "Time",
          required: true,
          id: "time",
          name: "time",
        },
        {
          type: "colorpicker",
          label: "Color",
          required: true,
          id: "color",
          name: "color",
        },
        {
          type: "simpleVault",
          required: true,
          label: "Files",
          id: "simplevault",
          name: "simplevault",
        },
        {
          type: "button",
          value: "Send",
          size: "medium",
          view: "flat",
          submit: true,
          color: "primary",
        },
      ],
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/form/FormConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <FormConfigurated :options="options"></FormConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { FormCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/form/FormCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <FormCdn></FormCdn>
    </section>
  `,
});

export const events = () => ({
  components: { FormEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/form/FormEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <FormEvents></FormEvents>
    </section>
  `,
});
