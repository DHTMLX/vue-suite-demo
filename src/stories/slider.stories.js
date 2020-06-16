import SliderBase from '../components/slider/SliderBase';
import SliderConfigurated from '../components/slider/SliderConfigurated';
import SliderCdn from '../components/slider/SliderCdn';
import SliderEvents from '../components/slider/SliderEvents';

export default {
    title: "Slider",
};

export const base = () => ({
  components: { SliderBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/SliderBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <SliderBase></SliderBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { SliderConfigurated },
  data: () => ({
    options: {
      min: 0,
      max: 100,
      step: 1,
      tooltip: true,
      tick: 1,
      majorTick: 10,
      tickTemplate: (v) => v,
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/SliderConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <SliderConfigurated :options="options"></SliderConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { SliderCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/SliderCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <SliderCdn></SliderCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { SliderEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/SliderEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <SliderEvents></SliderEvents>
    </section>
  `,
});
