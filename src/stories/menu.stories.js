import MenuBase from "../components/menu/MenuBase";
import MenuConfigurated from "../components/menu/MenuConfigurated";
import MenuData from "../components/menu/MenuData";
import MenuCdn from "../components/menu/MenuCdn";
import MenuEvents from "../components/menu/MenuEvents";

export default {
  title: "Menu",
};

export const base = () => ({
  components: { MenuBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/MenuBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <MenuBase></MenuBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { MenuConfigurated },
  data: () => ({
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/MenuConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <MenuConfigurated :options="options"></MenuConfigurated>
    </section>
  `,
});

export const data = () => ({
  components: { MenuData },
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/MenuData.vue"
        target="_blank"
      >
        Source code
      </a>
      <MenuData></MenuData>
    </section>
  `,
});

export const CDN = () => ({
  components: { MenuCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/MenuCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <MenuCdn></MenuCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { MenuEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/MenuEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <MenuEvents></MenuEvents>
    </section>
  `,
});
