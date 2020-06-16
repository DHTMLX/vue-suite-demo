<template>
  <div>
    <div ref="window"></div>
    <button className="button" @click="window.show()" class="custom-button">
      Show Window
    </button>
  </div>
</template>

<script>
import { Window } from "dhx-suite";
export default {
  name: "WindowBase",
  data: () => ({
    window: null,
    windowHtml: `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`
  }),
  mounted() {
    this.window = new Window({
      width: 440,
      height: 520,
      title: "Window",
      html: this.windowHtml,
      closable: true,
    });
  },
  beforeDestroy() {
		if (this.window) {
      this.window.destructor();
    }
	}
}
</script>
