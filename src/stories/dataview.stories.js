import DataviewBase from '../components/dataview/DataviewBase';
import DataviewConfigurated from '../components/dataview/DataviewConfigurated';
import DataviewData from '../components/dataview/DataviewData';
import DataviewCdn from '../components/dataview/DataviewCdn';
import DataviewEvents from '../components/dataview/DataviewEvents';

export default {
    title: 'Dataview',
};

export const base = () => ({
  components: { DataviewBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/DataviewBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <DataviewBase></DataviewBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { DataviewConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      itemsInRow: 4,
      gap: 10,
      keyNavigation: true,
      multiselection: true,
      dragMode: "both",
      template: (item) => `
        <div class="template template__container">
          <img
            class="template__image"
            src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
          />
          <h2 class="template__title">${item.title}</h2>
          <p class="template__description">${item.short}</з>
        </div>
      `,
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/DataviewConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <DataviewConfigurated :options="options"></DataviewConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { DataviewData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/DataviewData.vue"
        target="_blank"
      >
        Source code
      </a>
      <DataviewData></DataviewData>
    </section>
  `,
});

export const CDN = () => ({
  components: { DataviewCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/DataviewCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <DataviewCdn></DataviewCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { DataviewEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/DataviewEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <DataviewEvents></DataviewEvents>
    </section>
  `,
});
