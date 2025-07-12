<script>
import Chart from "./Chart.vue";
import Calendars from "./Calendars.vue";
import Grid from "./Grid.vue";
import Ribbon from "./Ribbon.vue";
import SlidersLayout from "./SlidersLayout.vue";
import TicketsDataview from "./TicketsDataview.vue";
import Tree from "./Tree.vue";

export default {
  components: {
    Chart,
    Calendars,
    Grid,
    Ribbon,
    SlidersLayout,
    TicketsDataview,
    Tree
  }
};
</script>

<template>
  <div class="left-content-wrapper">
    <Grid />
    <Calendars />
    <Chart />
    <div class="left-content-block">
      <SlidersLayout />
      <Tree />
    </div>
    <Ribbon />
    <TicketsDataview />
  </div>
</template>
