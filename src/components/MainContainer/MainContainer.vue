<script>
import Content from "../Content/Content.vue";
import Tabbar from "./Tabbar.vue";
import Toolbar from "./Toolbar.vue";

export default {
  components: {
    Content,
    Tabbar,
    Toolbar
  }
};
</script>

<template>
  <div class="main-container">
    <Toolbar />
    <Tabbar />
    <Content />
  </div>
</template>
