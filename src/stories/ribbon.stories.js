import RibbonBase from "../components/ribbon/RibbonBase";
import RibbonConfigurated from "../components/ribbon/RibbonConfigurated";
import RibbonData from "../components/ribbon/RibbonData";
import RibbonCdn from "../components/ribbon/RibbonCdn";
import RibbonEvents from "../components/ribbon/RibbonEvents";

export default {
  title: "Ribbon",
};

export const base = () => ({
  components: { RibbonBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ribbon/RibbonBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <RibbonBase></RibbonBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { RibbonConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ribbon/RibbonConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <RibbonConfigurated :options="options"></RibbonConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { RibbonData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ribbon/RibbonData.vue"
        target="_blank"
      >
        Source code
      </a>
      <RibbonData></RibbonData>
    </section>
  `,
});

export const CDN = () => ({
  components: { RibbonCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ribbon/RibbonCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <RibbonCdn></RibbonCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { RibbonEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ribbon/RibbonEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <RibbonEvents></RibbonEvents>
    </section>
  `,
});
