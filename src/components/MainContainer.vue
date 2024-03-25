<template>
    <div class="container">
      <Toolbar />
      <Tabbar />
      <Content />
    </div>
  </template>
  
  <script>
    import Content from "./Content/Content.vue";
    import Tabbar from "./Tabbar.vue";
    import Toolbar from "./Toolbar.vue";
  
    export default {
      components: {
        Content,
        Tabbar,
        Toolbar
      }
    }
  </script>
  
  <style scoped>
    .container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      overflow: hidden;
    }
  </style>