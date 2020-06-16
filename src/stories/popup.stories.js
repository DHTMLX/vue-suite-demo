import PopupBase from '../components/popup/PopupBase';
import PopupCdn from '../components/popup/PopupCdn';
import PopupEvents from '../components/popup/PopupEvents';

export default {
    title: "Popup",
};

export const base = () => ({
  components: { PopupBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/PopupBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <PopupBase></PopupBase>
    </section>
  `,
});

export const CDN = () => ({
  components: { PopupCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/PopupCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <PopupCdn></PopupCdn>
    </section>
  `,
});

export const Events = () => ({
  components: { PopupEvents },
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/PopupEvents.vue"
        target="_blank"
      >
        Source code
      </a>
      <PopupEvents></PopupEvents>
    </section>
  `,
});
