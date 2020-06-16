import TreeBase from '../components/tree/TreeBase';
import TreeConfigurated from '../components/tree/TreeConfigurated';
import TreeData from '../components/tree/TreeData';
import TreeCdn from '../components/tree/TreeCdn';
import TreeEvents from '../components/tree/TreeEvents';

export default {
    title: "Tree",
};

export const base = () => ({
  components: { TreeBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TreeBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <TreeBase></TreeBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { TreeConfigurated },
  data: () => ({
    options: {
      keyNavigation: true,
      checkbox: true,
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TreeConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <TreeConfigurated :options="options"></TreeConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { TreeData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TreeData.vue"
        target="_blank"
      >
        Source code
      </a>
      <TreeData></TreeData>
    </section>
  `,
});

export const CDN = () => ({
  components: { TreeCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TreeCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <TreeCdn></TreeCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { TreeEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/TreeEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <TreeEvents></TreeEvents>
    </section>
  `,
});
