import ColorpickerBase from '../components/colorpicker/ColorpickerBase';
import ColorpickerConfigurated from '../components/colorpicker/ColorpickerConfigurated';
import ColorpickerCdn from '../components/colorpicker/ColorpickerCdn';
import ColorpickerEvents from '../components/colorpicker/ColorpickerEvents';

export default {
    title: 'Colorpicker',
};

export const base = () => ({
  components: { ColorpickerBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ColorpickerBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <ColorpickerBase></ColorpickerBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { ColorpickerConfigurated },
  data: () => ({
    options: {
      css: 'dhx_widget--bordered',
      paletteOnly: true,
      grayShades: true,
      pickerOnly: true
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ColorpickerConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <ColorpickerConfigurated :options="options"></ColorpickerConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { ColorpickerCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ColorpickerCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <ColorpickerCdn></ColorpickerCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { ColorpickerEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/ColorpickerEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <ColorpickerEvents></ColorpickerEvents>
    </section>
  `,
});
