<template>
  <div ref="node" class="container" style="flex-grow: 2;"></div>
</template>

<script>
import { Layout, Slider } from "@dhx/trial-suite";

export default {
  data() {
    return {
      node: null,
      sliderLayout: null,
      slider1: null,
      slider2: null,
      slider3: null,
      slider4: null,
      slider5: null,
    };
  },
  methods: {
    tickTemplate(value) {
      return `${value}`;
    }
  },
  mounted() {
    this.sliderLayout = new Layout(this.$refs.node, {
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
              id: "slider1",
            },
            {
              padding: 10,
              height: "content",
              id: "slider2",
            },
            {
              padding: 10,
              height: "content",
              id: "slider3",
            },
            {
              padding: 10,
              height: "content",
              id: "slider4",
            },
          ],
        },
        {
          padding: "10px 20px",
          height: "260px",
          width: "20%",
          id: "slider5",
        },
      ],
    });
    console.log(this.tickTemplate)

    this.slider1 = new Slider(null, {
      min: 0,
      max: 40,
      step: 1,
    });
    // Slider 2 initialization
    this.slider2 = new Slider(null, {
      min: 0,
      max: 40,
      range: true,
      value: [10, 20],
      step: 1,
    });

    // Slider 3 initialization
    this.slider3 = new Slider(null, {
      min: 0,
      max: 40,
      step: 1,
      range: true,
      value: [0, 20],
      tick: 1,
      majorTick: 5,
      tickTemplate: this.tickTemplate,
    });

    // Slider 4 initialization
    this.slider4 = new Slider(null, {
      min: 0,
      max: 40,
      step: 10,
      range: true,
      value: [0, 20],
    });

    // Slider 5 initialization
    this.slider5 = new Slider(null, {
      mode: "vertical",
      range: true,
      min: 0,
      max: 40,
      step: 2,
      tick: 1,
      majorTick: 5,
      value: [0, 20],
      tickTemplate: this.tickTemplate,
    });

    // Attached all sliders in sliderLayout, which is main layout's cell
    this.sliderLayout.getCell("slider1").attach(this.slider1);
    this.sliderLayout.getCell("slider2").attach(this.slider2);
    this.sliderLayout.getCell("slider3").attach(this.slider3);
    this.sliderLayout.getCell("slider4").attach(this.slider4);
    this.sliderLayout.getCell("slider5").attach(this.slider5);
  },
  beforeDestroy() {
    this.sliderLayout?.destructor();
  }
};
</script>