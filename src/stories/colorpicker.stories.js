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
        href="https://github.com/DHTMLX/vue-suite-demo/"
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
      type: "spline",
			scales: {
				"bottom": {
					text: "month"
				},
				"left": {
					maxTicks: 10,
					max: 100,
					min: 0
				}
			},
			series: [
				{
					id: "A",
					value: "company C",
					color: "#5E83BA",
					pointType: "circle",
					fill: "#5E83BA",
					barWidth: 35
				}
			]
    }
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/"
        target="_blank"
      >
        Source code
      </a>
      <section style="width: 600px">
        <ColorpickerConfigurated :options="options"></ColorpickerConfigurated>
      </section>
    </section>
  `,
});

export const CDN = () => ({
  components: { ColorpickerCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/"
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
        href="https://github.com/DHTMLX/vue-suite-demo/"
        target="_blank"
      >
        Source code
      </a>
      <ColorpickerEvents></ColorpickerEvents>
    </section>
  `,
});
