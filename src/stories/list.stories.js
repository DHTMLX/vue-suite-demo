import ListBase from "../components/list/ListBase";
import ListConfigurated from "../components/list/ListConfigurated";
import ListData from "../components/list/ListData";
import ListCdn from "../components/list/ListCdn";
import ListEvents from "../components/list/ListEvents";

export default {
  title: "List",
};

export const base = () => ({
  components: { ListBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/list/ListBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <ListBase></ListBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { ListConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      itemHeight: 70,
      keyNavigation: true,
      dragMode: "both",
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/list/ListConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <section style="width: 600px">
        <ListConfigurated :options="options"></ListConfigurated>
      </section>
    </section>
  `,
});

export const data = () => ({
  components: { ListData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/list/ListData.vue"
        target="_blank"
      >
        Source code
      </a>
      <ListData></ListData>
    </section>
  `,
});

export const CDN = () => ({
  components: { ListCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/list/ListCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <ListCdn></ListCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { ListEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/list/ListEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <ListEvents></ListEvents>
    </section>
  `,
});
