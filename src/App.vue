<script>
  import MainContainer from "./components/MainContainer/MainContainer.vue";
  import Sidebar from "./components/Sidebar/Sidebar.vue";
  import "@dhx/trial-suite/codebase/suite.min.css";

  export default {
    components: {
      MainContainer,
      Sidebar
    }
  };
</script>

<template>
  <main class="app_main">
    <Sidebar />
    <MainContainer />
  </main>
</template>
