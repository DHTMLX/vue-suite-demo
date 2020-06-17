import MessageBase from "../components/message/MessageBase";
import MessageCdn from "../components/message/MessageCdn";

export default {
  title: "Message",
};

export const base = () => ({
  components: { MessageBase },
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/message/MessageBase.vue"
        target="_blank"
      >
        Source code
      </a>
      <MessageBase></MessageBase>
    </section>
  `,
});

export const CDN = () => ({
  components: { MessageCdn },
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/message/MessageCdn.vue"
        target="_blank"
      >
        Source code
      </a>
      <MessageCdn></MessageCdn>
    </section>
  `,
});
