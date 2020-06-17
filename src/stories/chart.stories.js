import ChartBase from '../components/chart/ChartBase';
import ChartConfigurated from '../components/chart/ChartConfigurated';
import ChartData from '../components/chart/ChartData';
import ChartCdn from '../components/chart/ChartCdn';
import ChartEvents from '../components/chart/ChartEvents';

export default {
    title: 'Chart',
};

export const base = () => ({
  components: { ChartBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/"
        target="_blank"
      >
        Source code
      </a>
      <ChartBase></ChartBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { ChartConfigurated },
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
        <ChartConfigurated :options="options"></ChartConfigurated>
      </section>
    </section>
  `,
});

export const data = () => ({
  components: { ChartData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/"
        target="_blank"
      >
        Source code
      </a>
      <ChartData></ChartData>
    </section>
  `,
});

export const CDN = () => ({
  components: { ChartCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/"
        target="_blank"
      >
        Source code
      </a>
      <ChartCdn></ChartCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { ChartEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/"
        target="_blank"
      >
        Source code
      </a>
      <ChartEvents></ChartEvents>
    </section>
  `,
});
