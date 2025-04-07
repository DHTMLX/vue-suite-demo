<script>
import { Layout, Slider } from "@dhx/trial-suite";

export default {
  methods: {
    tickTemplate(value) {
      return `${value}`;
    }
  },
  
  mounted() {
    this.layout = new Layout(this.$refs.layout_container, {
      type: "none",
      height: "fit-content",
      cols: [
        {
          height: "content",
          align: "between",
          rows: [
            {
              padding: 10,
              height: "content",
              id: "slider1"
            },
            {
              padding: 10,
              height: "content",
              id: "slider2"
            },
            {
              padding: 10,
              height: "content",
              id: "slider3"
            },
            {
              padding: 10,
              height: "content",
              id: "slider4"
            }
          ]
        },
        {
          padding: "10px 20px",
          height: "260px",
          width: "20%",
          id: "slider5"
        }
      ]
    });

    this.slider1 = new Slider(null, {
      min: 0,
      max: 40,
      step: 1
    });

    this.slider2 = new Slider(null, {
      min: 0,
      max: 40,
      range: true,
      value: [10, 20],
      step: 1
    });

    this.slider3 = new Slider(null, {
      min: 0,
      max: 40,
      step: 1,
      range: true,
      value: [0, 20],
      tick: 1,
      majorTick: 5,
      tickTemplate: this.tickTemplate
    });

    this.slider4 = new Slider(null, {
      min: 0,
      max: 40,
      step: 10,
      range: true,
      value: [0, 20]
    });

    this.slider5 = new Slider(null, {
      mode: "vertical",
      range: true,
      min: 0,
      max: 40,
      step: 2,
      tick: 1,
      majorTick: 5,
      value: [0, 20],
      tickTemplate: this.tickTemplate
    });

    // Attached all sliders in layout, which is main layout's cell
    this.layout.getCell("slider1").attach(this.slider1);
    this.layout.getCell("slider2").attach(this.slider2);
    this.layout.getCell("slider3").attach(this.slider3);
    this.layout.getCell("slider4").attach(this.slider4);
    this.layout.getCell("slider5").attach(this.slider5);
  },

  unmounted() {
    this.layout?.destructor();
  }
};
</script>

<template>
  <div ref="layout_container" class="container" style="flex-grow: 2"></div>
</template>
