<template>
    <div class="left-content-wrapper">
        <Grid />
        <Calendars />
        <Accordion />
        <div class="block">
            <SlidersLayout />
            <Tree />
        </div>
        <Ribbon />
        <TicketsDataview />
    </div>
</template>
  
<script>
import Calendars from "./Calendars.vue";
import Grid from "./Grid.vue";
import Accordion from "./Accordion.vue"
import Ribbon from "./Ribbon.vue";
import SlidersLayout from "./SlidersLayout.vue";
import TicketsDataview from "./TicketsDataview.vue";
import Tree from "./Tree.vue";

export default {
    components: {
        Accordion,
        Calendars,
        Grid,
        Ribbon,
        SlidersLayout,
        TicketsDataview,
        Tree
    }
}
</script>
  
<style scoped>
.left-content-wrapper {
    display: flex;
    height: 100%;
    flex-grow: 1;
    gap: 12px;
    max-width: 800px;
    flex-direction: column;
}

.block {
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: space-between;
}
</style>