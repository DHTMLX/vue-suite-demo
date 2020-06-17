import SidebarBase from "../components/sidebar/SidebarBase";
import SidebarConfigurated from "../components/sidebar/SidebarConfigurated";
import SidebarData from "../components/sidebar/SidebarData";
import SidebarCdn from "../components/sidebar/SidebarCdn";
import SidebarEvents from "../components/sidebar/SidebarEvents";

export default {
  title: "Sidebar",
};

export const base = () => ({
  components: { SidebarBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/sidebar/SidebarBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <SidebarBase></SidebarBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { SidebarConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      width: 200,
      minWidth: 120,
      collapsed: false,
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/sidebar/SidebarConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <SidebarConfigurated :options="options"></SidebarConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { SidebarData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/sidebar/SidebarData.vue"
        target="_blank"
      >
        Source code
      </a>
      <SidebarData></SidebarData>
    </section>
  `,
});

export const CDN = () => ({
  components: { SidebarCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/sidebar/SidebarCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <SidebarCdn></SidebarCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { SidebarEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/sidebar/SidebarEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <SidebarEvents></SidebarEvents>
    </section>
  `,
});
