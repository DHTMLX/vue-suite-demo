<template>
  <div class="wrapper-content">
    <LeftContent />
    <RightContent />
  </div>
</template>
  
<script>
import LeftContent from "./LeftPanel/LeftContent.vue";
import RightContent from "./RightPanel/RightContent.vue";

export default {
  components: {
    LeftContent,
    RightContent
  }
};
</script>
  
<style scoped>
.wrapper-content {
  display: flex;
  flex-grow: 1;
  overflow: auto;
  padding: 12px;
  gap: 12px;
}

.container {
  border: var(--dhx-border);
}
</style>
