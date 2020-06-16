import GridBase from '../components/grid/GridBase';
import GridConfigurated from '../components/grid/GridConfigurated';
import GridData from '../components/grid/GridData';
import GridCdn from '../components/grid/GridCdn';
import GridEvents from '../components/grid/GridEvents';

export default {
    title: "Grid",
};

export const base = () => ({
  components: { GridBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/GridBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <GridBase></GridBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { GridConfigurated },
  data: () => ({
    options: {
      columns: [
        { id: 'country', header: [{text: 'Country'}] },
        { id: 'population', header: [{text: 'Population'}] },
        { id: 'yearlyChange', header: [{text: 'Yearly Change'}] },
        { id: 'netChange', header: [{text: 'Net Change'}] },
        { id: 'destiny', header: [{text: 'Density (P/Km²)'}] },
        { id: 'area', header: [{text: 'Land Area (Km²)'}] },
        { id: 'migrants', header: [{text: 'Migrants (net)'}] },
        { id: 'fert', header: [{text: 'Fert. Rate'}] },
        { id: 'age', header: [{text: 'Med. Age'}] },
        { id: 'urban', header: [{text: 'Urban Pop'}] },
      ],
			rowHeight: 60,
			autoWidth: true,
			editable: true,
			multiselection: true,
			selection: "complex",
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/GridConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <GridConfigurated :options="options"></GridConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { GridData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/GridData.vue"
        target="_blank"
      >
        Source code
      </a>
      <GridData></GridData>
    </section>
  `,
});

export const CDN = () => ({
  components: { GridCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/GridCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <GridCdn></GridCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { GridEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/GridEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <GridEvents></GridEvents>
    </section>
  `,
});
