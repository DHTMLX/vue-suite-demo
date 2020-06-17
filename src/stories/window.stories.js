import WindowBase from "../components/window/WindowBase";
import WindowConfigurated from "../components/window/WindowConfigurated";
import WindowCdn from "../components/window/WindowCdn";
import WindowEvents from "../components/window/WindowEvents";

export default {
  title: "Window",
};

export const base = () => ({
  components: { WindowBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/window/WindowBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <WindowBase></WindowBase>
    </section>
  `,
});

export const configurated = () => ({
  components: { WindowConfigurated },
  data: () => ({
    options: {
      width: 440,
      height: 520,
      title: "Window",
      html: `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`,
      closable: true,
      modal: true,
    },
  }),
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/window/WindowConfigurated.vue"
        target="_blank"
      >
        Source code
      </a>
      <WindowConfigurated :options="options"></WindowConfigurated>
    </section>
  `,
});

export const CDN = () => ({
  components: { WindowCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/window/WindowCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <WindowCdn></WindowCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { WindowEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/window/WindowEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <WindowEvents></WindowEvents>
    </section>
  `,
});
