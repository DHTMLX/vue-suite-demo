import ComboboxBase from '../components/combobox/ComboboxBase';
import ComboboxConfigurated from '../components/combobox/ComboboxConfigurated';
import ComboboxData from '../components/combobox/ComboboxData';
import ComboboxCdn from '../components/combobox/ComboboxCdn';
import ComboboxEvents from '../components/combobox/ComboboxEvents';

export default {
    title: 'Combobox',
};

export const base = () => ({
  components: { ComboboxBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ComboboxBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <ComboboxBase></ComboboxBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { ComboboxConfigurated },
  data: () => ({
    options: {
      multiselection: true,
      label: 'DHX-angular combobox',
      labelPosition: 'top',
      labelWidth: 150,
      selectAllButton: true,
      required: true,
      itemsCount: true,
      placeholder: 'Click to choose',
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ComboboxConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <ComboboxConfigurated :options="options"></ComboboxConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { ComboboxData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ComboboxData.vue"
        target="_blank"
      >
        Source code
      </a>
      <ComboboxData></ComboboxData>
    </section>
  `,
});

export const CDN = () => ({
  components: { ComboboxCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ComboboxCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <ComboboxCdn></ComboboxCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { ComboboxEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ComboboxEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <ComboboxEvents></ComboboxEvents>
    </section>
  `,
});
