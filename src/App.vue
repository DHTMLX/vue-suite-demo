<template>
  <main>
    <Sidebar />
    <MainContainer/>
  </main>
</template>

<script>
  import MainContainer from './components/MainContainer.vue';
  import Sidebar from './components/Sidebar.vue';
  import "@dhx/trial-suite/codebase/suite.min.css"

  export default {
    components: {
      MainContainer,
      Sidebar
    }
  }
</script>

<style scoped>
  main {
    height: 100%;
    width: 100%;
    display: flex;
  }
</style>

<style>
  .bordered {
    border: var(--dhx-border);
  }
</style>