import ToolbarBase from '../components/toolbar/ToolbarBase';
import ToolbarConfigurated from '../components/toolbar/ToolbarConfigurated';
import ToolbarData from '../components/toolbar/ToolbarData';
import ToolbarCdn from '../components/toolbar/ToolbarCdn';
import ToolbarEvents from '../components/toolbar/ToolbarEvents';

export default {
    title: "Toolbar",
};

export const base = () => ({
  components: { ToolbarBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ToolbarBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <ToolbarBase></ToolbarBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { ToolbarConfigurated },
  data: () => ({
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      navigationType: 'pointer',
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ToolbarConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <ToolbarConfigurated :options="options"></ToolbarConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { ToolbarData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ToolbarData.vue"
        target="_blank"
      >
        Source code
      </a>
      <ToolbarData></ToolbarData>
    </section>
  `,
});

export const CDN = () => ({
  components: { ToolbarCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ToolbarCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <ToolbarCdn></ToolbarCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { ToolbarEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ToolbarEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <ToolbarEvents></ToolbarEvents>
    </section>
  `,
});
